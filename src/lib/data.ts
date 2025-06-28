export type Seat = {
  id: string;
  status: 'free' | 'occupied' ;
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

export type Building = {
  id: string;
  name: string;
  floors: Floor[];
};

export const initialData: Building[] = [
  {
    "id": "J",
    "name": "Geb\u00e4ude J",
    "floors": [
      {
        "id": "J2",
        "name": "Etage J2",
        "rooms": [
          {
            "id": "J2-R1",
            "name": "Room J2-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "J3",
        "name": "Etage J3",
        "rooms": [
          {
            "id": "J3-R1",
            "name": "Room J3-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J3-R2",
            "name": "Room J3-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "J4",
        "name": "Etage J4",
        "rooms": [
          {
            "id": "J4-R1",
            "name": "Room J4-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J4-R2",
            "name": "Room J4-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J4-R3",
            "name": "Room J4-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "J5",
        "name": "Etage J5",
        "rooms": [
          {
            "id": "J5-R1",
            "name": "Room J5-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J5-R2",
            "name": "Room J5-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J5-R3",
            "name": "Room J5-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J5-R4",
            "name": "Room J5-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "J6",
        "name": "Etage J6",
        "rooms": [
          {
            "id": "J6-R1",
            "name": "Room J6-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J6-R2",
            "name": "Room J6-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J6-R3",
            "name": "Room J6-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J6-R4",
            "name": "Room J6-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J6-R5",
            "name": "Room J6-R5",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "J7",
        "name": "Etage J7",
        "rooms": [
          {
            "id": "J7-R1",
            "name": "Room J7-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J7-R2",
            "name": "Room J7-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J7-R3",
            "name": "Room J7-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J7-R4",
            "name": "Room J7-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J7-R5",
            "name": "Room J7-R5",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "J7-R6",
            "name": "Room J7-R6",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "BS",
    "name": "Geb\u00e4ude BS",
    "floors": [
      {
        "id": "BS2",
        "name": "Etage BS2",
        "rooms": [
          {
            "id": "BS2-R1",
            "name": "Room BS2-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "BS3",
        "name": "Etage BS3",
        "rooms": [
          {
            "id": "BS3-R1",
            "name": "Room BS3-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS3-R2",
            "name": "Room BS3-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "BS4",
        "name": "Etage BS4",
        "rooms": [
          {
            "id": "BS4-R1",
            "name": "Room BS4-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS4-R2",
            "name": "Room BS4-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS4-R3",
            "name": "Room BS4-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "BS5",
        "name": "Etage BS5",
        "rooms": [
          {
            "id": "BS5-R1",
            "name": "Room BS5-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS5-R2",
            "name": "Room BS5-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS5-R3",
            "name": "Room BS5-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS5-R4",
            "name": "Room BS5-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "BS6",
        "name": "Etage BS6",
        "rooms": [
          {
            "id": "BS6-R1",
            "name": "Room BS6-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS6-R2",
            "name": "Room BS6-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS6-R3",
            "name": "Room BS6-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS6-R4",
            "name": "Room BS6-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS6-R5",
            "name": "Room BS6-R5",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "BS7",
        "name": "Etage BS7",
        "rooms": [
          {
            "id": "BS7-R1",
            "name": "Room BS7-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS7-R2",
            "name": "Room BS7-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS7-R3",
            "name": "Room BS7-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS7-R4",
            "name": "Room BS7-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS7-R5",
            "name": "Room BS7-R5",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "BS7-R6",
            "name": "Room BS7-R6",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "B",
    "name": "Geb\u00e4ude B",
    "floors": [
      {
        "id": "B2",
        "name": "Etage B2",
        "rooms": [
          {
            "id": "B2-R1",
            "name": "Room B2-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "B3",
        "name": "Etage B3",
        "rooms": [
          {
            "id": "B3-R1",
            "name": "Room B3-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B3-R2",
            "name": "Room B3-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "B4",
        "name": "Etage B4",
        "rooms": [
          {
            "id": "B4-R1",
            "name": "Room B4-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B4-R2",
            "name": "Room B4-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B4-R3",
            "name": "Room B4-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "B5",
        "name": "Etage B5",
        "rooms": [
          {
            "id": "B5-R1",
            "name": "Room B5-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B5-R2",
            "name": "Room B5-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B5-R3",
            "name": "Room B5-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B5-R4",
            "name": "Room B5-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "B6",
        "name": "Etage B6",
        "rooms": [
          {
            "id": "B6-R1",
            "name": "Room B6-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B6-R2",
            "name": "Room B6-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B6-R3",
            "name": "Room B6-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B6-R4",
            "name": "Room B6-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B6-R5",
            "name": "Room B6-R5",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "B7",
        "name": "Etage B7",
        "rooms": [
          {
            "id": "B7-R1",
            "name": "Room B7-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B7-R2",
            "name": "Room B7-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B7-R3",
            "name": "Room B7-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B7-R4",
            "name": "Room B7-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B7-R5",
            "name": "Room B7-R5",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B7-R6",
            "name": "Room B7-R6",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "B8",
        "name": "Etage B8",
        "rooms": [
          {
            "id": "B8-R1",
            "name": "Room B8-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B8-R2",
            "name": "Room B8-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B8-R3",
            "name": "Room B8-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B8-R4",
            "name": "Room B8-R4",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B8-R5",
            "name": "Room B8-R5",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B8-R6",
            "name": "Room B8-R6",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "B8-R7",
            "name": "Room B8-R7",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "N",
    "name": "Geb\u00e4ude N",
    "floors": [
      {
        "id": "N5",
        "name": "Etage N5",
        "rooms": [
          {
            "id": "N5-R1",
            "name": "Room N5-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "N6",
        "name": "Etage N6",
        "rooms": [
          {
            "id": "N6-R1",
            "name": "Room N6-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "N6-R2",
            "name": "Room N6-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      },
      {
        "id": "N7",
        "name": "Etage N7",
        "rooms": [
          {
            "id": "N7-R1",
            "name": "Room N7-R1",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "N7-R2",
            "name": "Room N7-R2",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          },
          {
            "id": "N7-R3",
            "name": "Room N7-R3",
            "grid": {
              "cols": 7,
              "rows": 4
            },
            "seats": [
              {
                "id": "4A",
                "status": "free"
              },
              {
                "id": "4B",
                "status": "free"
              },
              {
                "id": "4C",
                "status": "occupied",
                "user": "Eve"
              },
              {
                "id": "4D",
                "status": "free"
              },
              {
                "id": "5A",
                "status": "free",
                "user": "Frank"
              },
              {
                "id": "5B",
                "status": "free"
              },
              {
                "id": "5C",
                "status": "free"
              },
              {
                "id": "5D",
                "status": "free"
              }
            ],
            "elements": [
              {
                "type": "table",
                "pos": {
                  "x": 1,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "4A",
                "pos": {
                  "x": 1,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4B",
                "pos": {
                  "x": 2,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4C",
                "pos": {
                  "x": 3,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "4D",
                "pos": {
                  "x": 4,
                  "y": 2
                }
              },
              {
                "type": "table",
                "pos": {
                  "x": 5,
                  "y": 2
                },
                "size": {
                  "w": 3,
                  "h": 1
                }
              },
              {
                "type": "seat",
                "id": "5A",
                "pos": {
                  "x": 5,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5B",
                "pos": {
                  "x": 6,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5C",
                "pos": {
                  "x": 7,
                  "y": 1
                }
              },
              {
                "type": "seat",
                "id": "5D",
                "pos": {
                  "x": 4,
                  "y": 3
                }
              }
            ]
          }
        ]
      }
    ]
  }
];
