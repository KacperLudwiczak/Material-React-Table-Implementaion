import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MaterialReactTableProps,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";

const initData = [
  {
    id: "d6gn54f6d45j",
    firstName: "John",
    lastName: "Doe",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
    subRows: [
      {
        id: "d6gn54flugf6d45j",
        firstName: "Ervin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            id: "d6465fdgn54f6d45j",
            firstName: "Jordane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
    ],
  },
  {
    id: "d6m53dty5tk4dxgn54f6d45j",
    firstName: "Jane",
    lastName: "Doe",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
    subRows: [
      {
        id: "d6m53dty5tk4d444sssd45j",
        firstName: "Trvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            id: "d6m53dtyddddddddddxgn54f6d45j",
            firstName: "Dordane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
    ],
  },
  {
    id: "d6m53dty5tk455ddddxbbbn54f6d45j",
    firstName: "Joe",
    lastName: "Doe",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
    subRows: [
      {
        id: "jjjjj53dty5tk4dxgn54f6d45j",
        firstName: "Arvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            id: "kkkkty5tk4dxgn54f6d45j",
            firstName: "Gane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
    ],
  },
  {
    id: "dksfdjhfrrrrrdxgn54f6d45j",
    firstName: "Kevin",
    lastName: "Vandy",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
    subRows: [
      {
        id: "lllllllllty5tk4dxgn54f6d45j",
        firstName: "Ervin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            id: "d6m53dty5t555555fffff",
            firstName: "Jordane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
    ],
  },
  {
    id: "slgjjjjjjssssssjksgbtk4dxgn54f6d45j",
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
    subRows: [
      {
        id: "sbljigsh54vd5dxgn54f6d45j",
        firstName: "Ervin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            id: "dnjblfj5j1k4dxgn54f6d45j",
            firstName: "Jordane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
    ],
  },
  {
    id: "ccntk4dxgn54f6d45j",
    firstName: "Sarah",
    lastName: "Smith",
    address: "123 Main St",
    city: "Los Angeles",
    state: "California",
    subRows: [
      {
        id: "tsdty5tk4dxgn54f6d45j",
        firstName: "Ervin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            id: "qdad5tk4dxgn54f6d45j",
            firstName: "Jordane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
    ],
  },
  {
    id: "xgfdtk4dxgn54f6d45j",
    firstName: "Michael",
    lastName: "Johnson",
    address: "456 Elm St",
    city: "New York",
    state: "New York",
    subRows: [
      {
        id: "nfhfjk4dxgn54f6d45j",
        firstName: "Ervin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            id: "15d4g5d5tk4dxgn54f6d45j",
            firstName: "Jordane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
    ],
  },
  {
    id: "fjrh64r5tk4dxgn54f6d45j",
    firstName: "Drake",
    lastName: "Doe",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
    subRows: [
      {
        id: "dfgjjjjjjjjjjj5tk4dxgn54f6d45j",
        firstName: "Ervin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            id: "54df4h5tk4dxgn54f6d45j",
            firstName: "Jordane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
    ],
  },
  {
    id: "lwds4556stk4dxgn54f6d45j",
    firstName: "Jane",
    lastName: "Doe",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
    subRows: [
      {
        id: "ouy444k4dxgn54f6d45j",
        firstName: "Ervin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            id: "cbcb5434dxgn54f6d45j",
            firstName: "Jordane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
    ],
  },
];

// example data type
type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
};

const SimpleTable = () => {
  const [data, setData] = useState(() => initData);

  // should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableClickToCopy
      enableStickyHeader
      enableColumnFilterModes
      enableColumnOrdering
      enableGrouping
      enablePinning
      enableRowSelection
      enableExpanding
      enableExpandAll
      enableGlobalFilterModes
      autoResetPageIndex={false}
      enableRowOrdering
      muiTableBodyRowDragHandleProps={({ table }) => ({
        // This line declares a callback function that receives an object containing table as a parameter. It is used to extract the table property from the object. This property holds the state and functions of the table.
        onDragEnd: () => {
          // This line defines the onDragEnd event handler, which is triggered when the dragging operation is completed (typically when the user releases the dragged row).
          const { draggingRow, hoveredRow } = table.getState(); //  This line extracts the draggingRow and hoveredRow variables from the state of the table. These variables represent the row that is being dragged and the row over which it is hovering, respectively.
          if (hoveredRow && draggingRow) {
            // This line checks if both hoveredRow and draggingRow variables have truthy values. If both exist, it means that there is a valid hovered row and a row is being dragged.
            data.splice(
              (hoveredRow as MRT_Row<Person>).index,
              0,
              data.splice(draggingRow.index, 1)[0]
            ); // This lines performs the actual rearrangement of the data array. It uses the splice method to remove the dragged row from its original position and insert it at the index of the hovered row. The (hoveredRow as MRT_Row<Person>).index expression retrieves the index of the hovered row, and data.splice(draggingRow.index, 1)[0] removes the dragged row from its original index and returns it for insertion.
            setData([...data]); // This line updates the state of the data array by creating a new array with the spread syntax [...data]. This is necessary to trigger a re-render of the table with the updated data.
          }
        },
      })}
    />
  );
};

export default SimpleTable;
