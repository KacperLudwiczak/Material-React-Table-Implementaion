import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MaterialReactTableProps,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";

const initData = [
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

  const handleSaveRow: MaterialReactTableProps<Person>["onEditingRowSave"] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
    data[row.index] = values;
    //send/receive api updates here
    setData([...data]);
    exitEditingMode(); //required to exit editing mode
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableStickyHeader
      enableColumnFilterModes
      enableColumnOrdering
      enableGrouping
      enablePinning
      enableRowActions
      enableRowSelection
      enableExpanding
      enableExpandAll
      enableGlobalFilterModes
      editingMode="modal"
      enableEditing={true}
      onEditingRowSave={handleSaveRow}
      autoResetPageIndex={false}
      enableRowOrdering
      enableSorting={false}
      muiTableBodyRowDragHandleProps={({ table }) => ({
        onDragEnd: () => {
          const { draggingRow, hoveredRow } = table.getState();
          if (hoveredRow && draggingRow) {
            data.splice(
              (hoveredRow as MRT_Row<Person>).index,
              0,
              data.splice(draggingRow.index, 1)[0]
            );
            setData([...data]);
          }
        },
      })}
    />
  );
};

export default SimpleTable;
