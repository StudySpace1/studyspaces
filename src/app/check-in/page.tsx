'use client';

import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import type { Html5QrcodeResult } from 'html5-qrcode';
import { useAppData } from '@/context/AppDataContext';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { QrCode, ArrowLeft, Loader2 } from 'lucide-react';

export default function CheckInPage() {
  const { checkInSeat } = useAppData();
  const { toast } = useToast();
  const router = useRouter();
  const [showScanner, setShowScanner] = useState(true);

  useEffect(() => {
    if (!showScanner) return;
    
    const scanner = new Html5QrcodeScanner(
      'qr-reader',
      { fps: 10, qrbox: {width: 250, height: 250} },
      false // verbose
    );

    const onScanSuccess = (decodedText: string, decodedResult: Html5QrcodeResult) => {
      setShowScanner(false);
      scanner.clear();
      handleScan(decodedText);
    }

    const onScanFailure = (error: any) => {
      // ignore
    }

    scanner.render(onScanSuccess, onScanFailure);

    return () => {
      // This is a defensive cleanup.
      const el = document.getElementById('qr-reader-region');
      if (el && el.style.display !== 'none') {
        scanner.clear().catch(err => console.error("Failed to clear scanner", err));
      }
    };
  }, [showScanner]);

  const handleScan = (data: string) => {
    if (data) {
      try {
        const parsed = JSON.parse(data);
        const { seatId, roomId, floorId } = parsed;

        if (seatId && roomId && floorId) {
          const success = checkInSeat(seatId, roomId, floorId);
          if (success) {
            toast({
              title: 'Check-in Successful!',
              description: `You have successfully checked into seat ${seatId}.`,
            });
            router.push('/');
          } else {
            toast({
              variant: 'destructive',
              title: 'Check-in Failed',
              description: 'Seat could not be found, is not reserved by you, or is already occupied.',
            });
            router.push('/');
          }
        } else {
          throw new Error('Invalid QR code data');
        }
      } catch (e) {
        toast({
          variant: 'destructive',
          title: 'Invalid QR Code',
          description: 'The scanned QR code is not valid for seat check-in.',
        });
         router.push('/');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-4">
          <QrCode className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-headline text-primary">Check-in</h1>
        </div>
         <Link href="/" passHref>
            <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to map
            </Button>
        </Link>
      </header>
      <main className="flex-1 p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Scan QR Code</CardTitle>
            <CardDescription>Position the QR code within the frame to check in.</CardDescription>
          </CardHeader>
          <CardContent>
            {!showScanner ? (
              <div className="flex flex-col items-center justify-center py-8 gap-4">
                <Loader2 className="w-16 h-16 text-primary animate-spin" />
                <p>Processing check-in...</p>
              </div>
            ) : (
              <div id="qr-reader" className="w-full"></div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
