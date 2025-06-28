export type Seat = {
  id: string;
  status: 'free' | 'occupied' | 'reserved';
  user?: string;
  reservedUntil?: Date;
};

type GridElement = {
  id?: string;
  type: 'seat' | 'table';
  pos: { x: number; y: number };
  size?: { w: number; h: number };
};

export type Room = {
  id: string;
  name: string;
  seats: Seat[];
  grid: { cols: number; rows: number };
  elements: GridElement[];
};

export type Floor = {
  id: string;
  name: string;
  rooms: Room[];
};

export const initialData: Floor[] = [
  {
    id: 'floor-1',
    name: 'First Floor',
    rooms: [
      {
        id: 'room-101',
        name: 'Quiet Study Area',
        grid: { cols: 6, rows: 5 },
        seats: [
          { id: '1A', status: 'free' },
          { id: '1B', status: 'occupied', user: 'Alex' },
          { id: '1C', status: 'free' },
          { id: '1D', status: 'free' },
          { id: '2A', status: 'free' },
          { id: '2B', status: 'reserved', user: 'Beth' },
          { id: '2C', status: 'free' },
          { id: '2D', status: 'occupied', user: 'Charlie' },
        ],
        elements: [
            { type: 'table', pos: { x: 1, y: 1 }, size: { w: 2, h: 1 } },
            { type: 'seat', id: '1A', pos: { x: 1, y: 2 } },
            { type: 'seat', id: '1B', pos: { x: 2, y: 2 } },

            { type: 'table', pos: { x: 4, y: 1 }, size: { w: 2, h: 1 } },
            { type: 'seat', id: '1C', pos: { x: 4, y: 2 } },
            { type: 'seat', id: '1D', pos: { x: 5, y: 2 } },

            { type: 'table', pos: { x: 1, y: 4 }, size: { w: 2, h: 1 } },
            { type: 'seat', id: '2A', pos: { x: 1, y: 3 } },
            { type: 'seat', id: '2B', pos: { x: 2, y: 3 } },

            { type: 'table', pos: { x: 4, y: 4 }, size: { w: 2, h: 1 } },
            { type: 'seat', id: '2C', pos: { x: 4, y: 3 } },
            { type: 'seat', id: '2D', pos: { x: 5, y: 3 } },
        ]
      },
      {
        id: 'room-102',
        name: 'Collaborative Zone',
        grid: { cols: 8, rows: 4 },
        seats: [
          { id: '3A', status: 'free' },
          { id: '3B', status: 'free' },
          { id: '3C', status: 'free' },
          { id: '3D', status: 'free' },
          { id: '3E', status: 'occupied', user: 'Diana' },
          { id: '3F', status: 'free' },
        ],
        elements: [
            { type: 'table', pos: { x: 2, y: 2 }, size: { w: 4, h: 1 } },
            { type: 'seat', id: '3A', pos: { x: 1, y: 2 } },
            { type: 'seat', id: '3B', pos: { x: 2, y: 1 } },
            { type: 'seat', id: '3C', pos: { x: 3, y: 1 } },
            { type: 'seat', id: '3D', pos: { x: 4, y: 1 } },
            { type: 'seat', id: '3E', pos: { x: 5, y: 1 } },
            { type: 'seat', id: '3F', pos: { x: 6, y: 2 } },
        ]
      },
    ],
  },
  {
    id: 'floor-2',
    name: 'Second Floor',
    rooms: [
      {
        id: 'room-201',
        name: 'Computer Lab',
        grid: { cols: 7, rows: 4 },
        seats: [
          { id: '4A', status: 'free' },
          { id: '4B', status: 'free' },
          { id: '4C', status: 'occupied', user: 'Eve' },
          { id: '4D', status: 'free' },
          { id: '5A', status: 'reserved', user: 'Frank' },
          { id: '5B', status: 'free' },
          { id: '5C', status: 'free' },
          { id: '5D', status: 'free' },
        ],
        elements: [
            { type: 'table', pos: { x: 1, y: 2 }, size: { w: 3, h: 1 } },
            { type: 'seat', id: '4A', pos: { x: 1, y: 1 } },
            { type: 'seat', id: '4B', pos: { x: 2, y: 1 } },
            { type: 'seat', id: '4C', pos: { x: 3, y: 1 } },
            { type: 'seat', id: '4D', pos: { x: 4, y: 2 } },

            { type: 'table', pos: { x: 5, y: 2 }, size: { w: 3, h: 1 } },
            { type: 'seat', id: '5A', pos: { x: 5, y: 1 } },
            { type: 'seat', id: '5B', pos: { x: 6, y: 1 } },
            { type: 'seat', id: '5C', pos: { x: 7, y: 1 } },
            { type: 'seat', id: '5D', pos: { x: 4, y: 3 } }, // this seat is floating
        ]
      },
    ],
  },
];
