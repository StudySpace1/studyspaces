# **App Name**: StudyPlace

## Core Features:

- Floor Selector: Display an interactive floor selector UI allowing students to choose the desired floor.  Floors must be configured in the source code.
- Room Display: Visualize rooms as clickable cards/panels within the selected floor.
- Seat Visualization: Render tables and individual seats within a room, with seats color-coded based on their real-time status (green=free, red=occupied, yellow=reserved).
- Seat Hover Tooltips: Implement tooltips on seats to display user name and reservation time upon hover, where applicable.
- Seat Booking Modal: Open a modal upon clicking a free seat, displaying booking information and a "Generate QR" button.
- QR Code Generation: Generate a unique QR code (using a library like `qrcode.react`) tied to the seat ID and reservation timestamp upon booking confirmation.
- Real-time Seat Status: Mark seats as reserved for the booking user once the booking is confirmed, updating the color-coded status in real-time.

## Style Guidelines:

- Background: Deep black (#000000) to set a modern dark theme.
- Primary: Vibrant orange (#FF4500) to signify energy and focus.
- Accent: Light gray (#D3D3D3) as highlights, focusing user attention.
- Font Pairing: 'Roboto' (sans-serif) for headlines, 'Open Sans' (sans-serif) for body text.
- Use consistent, minimalist icons for seat status (available, occupied, reserved).
- Implement a grid-based layout for floor, room, and seat displays, ensuring responsiveness across devices.
- Apply subtle transitions and animations when updating seat statuses and generating QR codes, enhancing the user experience.