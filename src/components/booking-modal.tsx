'use client';

import { useState } from 'react';
import QRCode from 'qrcode.react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { type Seat } from '@/lib/data';
import { Armchair, Building, DoorOpen, QrCode, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  seat: Seat | null;
  roomName: string;
  roomId: string;
  floorName: string;
  floorId: string;
  onBookSeat: (seat: Seat) => void;
}

export function BookingModal({
  isOpen,
  onOpenChange,
  seat,
  roomName,
  roomId,
  floorName,
  floorId,
  onBookSeat,
}: BookingModalProps) {
  const [showQr, setShowQr] = useState(false);

  if (!seat) return null;

  const qrValue = JSON.stringify({
    seatId: seat.id,
    roomId,
    floorId,
    timestamp: new Date().toISOString(),
  });

  const handleGenerateQr = () => {
    onBookSeat(seat);
    setShowQr(true);
  };
  
  const handleClose = () => {
    onOpenChange(false);
    // Reset QR state after modal closes
    setTimeout(() => setShowQr(false), 300);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">
            {showQr ? 'Seat Reserved' : 'Reserve Seat'}
          </DialogTitle>
          <DialogDescription>
             {showQr
              ? 'Show this QR code to check in.'
              : `You are about to reserve seat ${seat.id}.`}
          </DialogDescription>
        </DialogHeader>

        {showQr ? (
          <div className="flex flex-col items-center justify-center py-8 gap-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <div className="p-4 bg-white rounded-lg">
                <QRCode value={qrValue} size={200} />
            </div>
            <p className="font-bold text-lg">Seat {seat.id}</p>
          </div>
        ) : (
          <div className="py-4 space-y-4">
            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
              <Armchair className="w-8 h-8 text-primary" />
              <div>
                <p className="font-bold">Seat {seat.id}</p>
                <p className="text-sm text-muted-foreground">The selected seat for your booking.</p>
              </div>
            </div>
             <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
              <DoorOpen className="w-8 h-8 text-primary" />
              <div>
                <p className="font-bold">{roomName}</p>
                <p className="text-sm text-muted-foreground">Room</p>
              </div>
            </div>
             <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
              <Building className="w-8 h-8 text-primary" />
              <div>
                <p className="font-bold">{floorName}</p>
                <p className="text-sm text-muted-foreground">Floor</p>
              </div>
            </div>
          </div>
        )}

        <DialogFooter>
          {showQr ? (
            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button onClick={handleGenerateQr}>
                <QrCode className="mr-2 h-4 w-4" />
                Generate QR & Book
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
