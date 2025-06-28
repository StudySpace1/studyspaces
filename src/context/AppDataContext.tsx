'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { initialData, type Floor, type Seat } from '@/lib/data';

interface AppDataContextType {
  floors: Floor[];
  bookSeat: (seatToBook: Seat, roomId: string) => void;
  checkInSeat: (seatId: string, roomId: string, floorId: string) => boolean;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const [floors, setFloors] = useState<Floor[]>(initialData);

  const bookSeat = (seatToBook: Seat, roomId: string) => {
    const newFloors = floors.map((floor) => ({
      ...floor,
      rooms: floor.rooms.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            seats: room.seats.map((seat) => {
              if (seat.id === seatToBook.id) {
                return {
                  ...seat,
                  status: 'reserved' as const,
                  user: 'You',
                  reservedUntil: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // 2 hours from now
                };
              }
              return seat;
            }),
          };
        }
        return room;
      }),
    }));
    setFloors(newFloors);
  };

  const checkInSeat = (seatId: string, roomId: string, floorId: string): boolean => {
    let seatFoundAndUpdated = false;
    const newFloors = floors.map((floor) => {
      if (floor.id === floorId) {
        return {
          ...floor,
          rooms: floor.rooms.map((room) => {
            if (room.id === roomId) {
              const newSeats = room.seats.map((seat) => {
                if (seat.id === seatId && seat.status === 'reserved' && seat.user === 'You') {
                   seatFoundAndUpdated = true;
                   return { ...seat, status: 'occupied' as const, reservedUntil: undefined };
                }
                return seat;
              });
              return {...room, seats: newSeats};
            }
            return room;
          }),
        };
      }
      return floor;
    });

    if (seatFoundAndUpdated) {
      setFloors(newFloors);
    }
    return seatFoundAndUpdated;
  };

  return (
    <AppDataContext.Provider value={{ floors, bookSeat, checkInSeat }}>
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
