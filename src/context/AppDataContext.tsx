'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ref, onValue, get, update } from 'firebase/database';
import { database, isFirebaseConfigured } from '@/lib/firebase';
import { Building, initialData, type Floor, type Seat } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

interface AppDataContextType {
  buildings: Building[],
  loading: boolean;
  bookSeat: (seatToBook: Seat, roomId: string, floorId: string,buildingId: string) => void;
  checkInSeat: (seatId: string, roomId: string, floorId: string,buildingId: string) => Promise<boolean>;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isFirebaseConfigured && database) {
      const buildingsRef = ref(database, 'buildings/');

      const unsubscribe = onValue(buildingsRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const processedData = data.map((building: any) => ({
            ...building,
            floors: building.floors.map((floor: any) => ({
              ...floor,
              rooms: floor.rooms.map((room: any) => ({
                ...room,
                seats: room.seats.map((seat: any) => ({
                  ...seat,
                  reservedUntil: seat.reservedUntil ? new Date(seat.reservedUntil) : undefined,
                })),
              })),
            })),
          }));
          setBuildings(processedData);
        } else {
          update(ref(database), { 'buildings': initialData }); // falls leer, initialData pushen
        }
        setLoading(false);
      }, (error) => {
        console.error("Firebase read failed:", error);
        toast({
          variant: "destructive",
          title: "Firebase Error",
          description: "Could not connect to the database. Using local data.",
        });
        setBuildings(initialData);
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      toast({
        variant: "destructive",
        title: "Firebase Not Configured",
        description: "Using local data. Set up .env.local to enable real-time features.",
        duration: 9000,
      });
      setBuildings(initialData);
      setLoading(false);
    }
  }, [toast]);

  const findSeatPath = (buildingId: string, floorId: string, roomId: string, seatId: string) => {
    const buildingIndex = buildings.findIndex((b) => b.id === buildingId);
    if (buildingIndex === -1) return null;

    const floorIndex = buildings[buildingIndex].floors.findIndex((f) => f.id === floorId);
    if (floorIndex === -1) return null;

    const roomIndex = buildings[buildingIndex].floors[floorIndex].rooms.findIndex((r) => r.id === roomId);
    if (roomIndex === -1) return null;

    const seatIndex = buildings[buildingIndex].floors[floorIndex].rooms[roomIndex].seats.findIndex((s) => s.id === seatId);
    if (seatIndex === -1) return null;

    return `buildings/${buildingIndex}/floors/${floorIndex}/rooms/${roomIndex}/seats/${seatIndex}`;
  };

  const bookSeat = (seatToBook: Seat, roomId: string, floorId: string, buildingId: string) => {
    if (!isFirebaseConfigured || !database) {
      toast({
        variant: "destructive",
        title: "Feature Disabled",
        description: "Please configure Firebase to book seats.",
      });
      return;
    }

    const seatPath = findSeatPath(buildingId, floorId, roomId, seatToBook.id);
    if (!seatPath) return;

    const reservedUntil = new Date(new Date().getTime() + 2 * 60 * 60 * 1000); // 2 Stunden ab jetzt

    const updates: { [key: string]: any } = {};
    updates[`${seatPath}/status`] = 'reserved';
    updates[`${seatPath}/user`] = 'You';
    updates[`${seatPath}/reservedUntil`] = reservedUntil.toISOString();

    update(ref(database), updates);
  };

  const checkInSeat = async (seatId: string, roomId: string, floorId: string, buildingId: string): Promise<boolean> => {
    if (!isFirebaseConfigured || !database) {
      toast({
        variant: "destructive",
        title: "Feature Disabled",
        description: "Please configure Firebase to check in.",
      });
      return false;
    }

    const seatPath = findSeatPath(buildingId, floorId, roomId, seatId);
    if (!seatPath) return false;

    const seatRef = ref(database, seatPath);
    const snapshot = await get(seatRef);

    if (snapshot.exists()) {
      const seat = snapshot.val();
      if (seat.status === 'reserved' && seat.user === 'You') {
        const updates: { [key: string]: any } = {};
        updates[`${seatPath}/status`] = 'occupied';
        updates[`${seatPath}/reservedUntil`] = null;
        await update(ref(database), updates);
        return true;
      }
    }
    return false;
  };

  return (
    <AppDataContext.Provider value={{ buildings, loading, bookSeat, checkInSeat }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (context === undefined) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};
