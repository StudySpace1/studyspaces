'use client';

import * as React from 'react';
import { useState, useMemo } from 'react';
import { initialData, type Seat, type Room, type Floor } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BookingModal } from '@/components/booking-modal';
import { BookMarked, Armchair, Users, Building, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const SeatComponent = ({
  seat,
  onClick,
}: {
  seat: Seat;
  onClick: (seat: Seat) => void;
}) => {
  const seatColor = useMemo(() => {
    switch (seat.status) {
      case 'free':
        return 'bg-green-500 hover:bg-green-400';
      case 'occupied':
        return 'bg-red-500 cursor-not-allowed';
      case 'reserved':
        return 'bg-yellow-500 cursor-not-allowed';
      default:
        return 'bg-gray-500';
    }
  }, [seat.status]);

  const seatContent = (
    <div
      onClick={() => seat.status === 'free' && onClick(seat)}
      className={cn(
        'w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs transition-colors duration-300',
        seatColor,
        seat.status === 'free' ? 'cursor-pointer' : ''
      )}
      aria-label={`Seat ${seat.id}`}
    >
      <Armchair className="w-5 h-5 text-black/70" />
    </div>
  );

  if (seat.status !== 'free') {
    const reservationInfo =
      seat.status === 'occupied'
        ? `Occupied by ${seat.user}`
        : `Reserved by ${seat.user}`;
    const timeInfo = seat.reservedUntil ? ` until ${seat.reservedUntil.toLocaleTimeString()}` : '';

    return (
      <Tooltip>
        <TooltipTrigger asChild>{seatContent}</TooltipTrigger>
        <TooltipContent>
          <p>{`${reservationInfo}${timeInfo}`}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return seatContent;
};

export default function StudyPlacePage() {
  const [floors, setFloors] = useState<Floor[]>(initialData);
  const [selectedFloorId, setSelectedFloorId] = useState<string>(initialData[0].id);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(initialData[0].rooms[0].id);
  const [bookingSeat, setBookingSeat] = useState<Seat | null>(null);
  const { toast } = useToast();

  const selectedFloor = useMemo(() => floors.find((f) => f.id === selectedFloorId), [floors, selectedFloorId]);
  const selectedRoom = useMemo(() => selectedFloor?.rooms.find((r) => r.id === selectedRoomId), [selectedFloor, selectedRoomId]);

  const handleFloorChange = (floorId: string) => {
    setSelectedFloorId(floorId);
    const newFloor = floors.find(f => f.id === floorId);
    if (newFloor && newFloor.rooms.length > 0) {
      setSelectedRoomId(newFloor.rooms[0].id);
    } else {
      setSelectedRoomId(null);
    }
  };

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'free') {
      setBookingSeat(seat);
    }
  };

  const handleBookSeat = (seatToBook: Seat) => {
    const newFloors = floors.map((floor) => ({
      ...floor,
      rooms: floor.rooms.map((room) => ({
        ...room,
        seats: room.seats.map((seat) => {
          if (seat.id === seatToBook.id && room.id === selectedRoomId) {
            return {
              ...seat,
              status: 'reserved' as const,
              user: 'You',
              reservedUntil: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // 2 hours from now
            };
          }
          return seat;
        }),
      })),
    }));
    setFloors(newFloors);
    setBookingSeat(null);
    toast({
      title: "Seat Reserved!",
      description: `You have successfully reserved seat ${seatToBook.id}.`,
    });
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <header className="flex items-center gap-4 p-4 border-b border-border">
          <BookMarked className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-headline text-primary">StudyPlace</h1>
        </header>

        <main className="flex-1 p-4 sm:p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-headline mb-4">Select a Floor</h2>
            <Tabs value={selectedFloorId} onValueChange={handleFloorChange}>
              <TabsList>
                {floors.map((floor) => (
                  <TabsTrigger key={floor.id} value={floor.id} className="gap-2">
                    <Building className="h-4 w-4" />
                    {floor.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </section>

          {selectedFloor && (
            <section>
              <h2 className="text-2xl font-headline mb-4">Select a Room</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedFloor.rooms.map((room) => (
                  <Card
                    key={room.id}
                    className={cn(
                      'cursor-pointer transition-all duration-300',
                      selectedRoomId === room.id
                        ? 'border-primary ring-2 ring-primary shadow-lg'
                        : 'hover:border-primary/50'
                    )}
                    onClick={() => setSelectedRoomId(room.id)}
                  >
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg font-medium font-headline">{room.name}</CardTitle>
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        {room.seats.filter(s => s.status === 'free').length} / {room.seats.length} seats available
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {selectedRoom && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <span className="text-muted-foreground">{selectedFloor?.name}</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  <span>{selectedRoom.name} - Seating Plan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="p-4 bg-card-foreground/5 rounded-lg">
                  <div className="grid grid-cols-6 gap-4" style={{gridTemplateColumns: `repeat(${selectedRoom.grid.cols}, minmax(0, 1fr))`}}>
                    {selectedRoom.elements.map((el, index) => {
                      if (el.type === 'seat') {
                        const seat = selectedRoom.seats.find(s => s.id === el.id);
                        return seat ? (
                          <div key={el.id} style={{ gridColumn: el.pos.x, gridRow: el.pos.y }}>
                             <SeatComponent seat={seat} onClick={handleSeatClick} />
                          </div>
                        ) : null;
                      }
                      if (el.type === 'table') {
                        return (
                           <div key={`table-${index}`} className="bg-muted/40 rounded-md flex items-center justify-center text-xs text-muted-foreground" style={{ gridColumn: `${el.pos.x} / span ${el.size.w}`, gridRow: `${el.pos.y} / span ${el.size.h}`}}>
                            Table
                          </div>
                        )
                      }
                      return null;
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
        
        <BookingModal
          isOpen={!!bookingSeat}
          onOpenChange={(open) => !open && setBookingSeat(null)}
          seat={bookingSeat}
          roomName={selectedRoom?.name || ''}
          floorName={selectedFloor?.name || ''}
          onBookSeat={handleBookSeat}
        />
      </div>
    </TooltipProvider>
  );
}
