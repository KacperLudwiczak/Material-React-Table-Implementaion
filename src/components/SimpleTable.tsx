import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";

const data = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Woed",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Game",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

// example data type
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

const SimpleTable = () => {
  // should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
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
      // editingMode="modal"
      // enableEditing={true}
      // autoResetPageIndex={false}
      // enableRowOrdering
      // enableSorting={false}
    />
  );
};

export default SimpleTable;
