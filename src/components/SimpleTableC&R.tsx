import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_Cell,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";

type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
};

const initData: Person[] = [
  {
    firstName: "John",
    lastName: "Doe",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
    // subRows: [
    //   {
    //     firstName: "Ervin",
    //     lastName: "Reinger",
    //     address: "566 Brakus Inlet",
    //     city: "South Linda",
    //     state: "West Virginia",
    //     subRows: [
    //       {
    //         firstName: "Jordane",
    //         lastName: "Homenick",
    //         address: "1234 Brakus Inlet",
    //         city: "South Linda",
    //         state: "West Virginia",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    firstName: "Jane",
    lastName: "Woed",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    firstName: "Joe",
    lastName: "Game",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

const SimpleTableCR = () => {
  // should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        id: "firstName",
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        id: "lastName",
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        header: "Information",
        size: 450,
        columns: [
          {
            id: "address",
            accessorKey: "address",
            header: "Address",
            size: 150,
          },
          { id: "city", accessorKey: "city", header: "City", size: 150 },
          { id: "state", accessorKey: "state", header: "State", size: 150 },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState<Person[]>(() => initData);

  const handleSaveCell = (cell: MRT_Cell<Person>, value: string) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
    data[cell.row.index][cell.column.id as keyof Person] = value;
    //send/receive api updates here
    setData([...data]); //re-render with new data
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={initData}
      enableStickyHeader
      enableColumnFilterModes
      enableColumnOrdering
      enableGrouping
      enablePinning
      enableRowActions
      enableRowSelection
      enableExpandAll
      enableGlobalFilterModes
      muiTableBodyCellEditTextFieldProps={({ cell }) => ({
        onChange: (event) => {
          handleSaveCell(cell, event.target.value);
        },
      })}
      editingMode="cell"
      enableEditing={true}
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

export default SimpleTableCR;
