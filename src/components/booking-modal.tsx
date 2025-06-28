'use client';

import { useState, useEffect, useRef } from 'react';
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
import { Armchair, Building, DoorOpen, QrCode, CheckCircle, Download } from 'lucide-react';

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
  const qrCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset QR state after modal closes to ensure it doesn't show up on reopen
      setTimeout(() => setShowQr(false), 300);
    }
  }, [isOpen]);

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

  const handleDownload = () => {
    if (qrCodeRef.current) {
        const canvas = qrCodeRef.current.querySelector('canvas');
        if (canvas) {
            const pngUrl = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
            const downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = `seat-${seat.id}-qrcode.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">
            {showQr ? 'Seat Reserved' : 'Reserve Seat'}
          </DialogTitle>
          <DialogDescription>
             {showQr
              ? 'Show this QR code to check in or download it for later.'
              : `You are about to reserve seat ${seat.id}.`}
          </DialogDescription>
        </DialogHeader>

        {showQr ? (
          <div className="flex flex-col items-center justify-center py-8 gap-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <div ref={qrCodeRef} className="p-4 bg-white rounded-lg">
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
            <>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </>
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
