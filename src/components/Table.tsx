import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MaterialReactTableProps,
} from "material-react-table";
import { data } from "./data"; // Import the data from the separate file

// example data type
type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
};

const Table = () => {
  // should be memoized or stable
  const memoizedColumns = useMemo<MRT_ColumnDef<Person>[]>(
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

  const [tableData, setTableData] = useState<Person[]>(() => data);

  const handleSaveRow: MaterialReactTableProps<Person>["onEditingRowSave"] =
    async ({ exitEditingMode, row, values }) => {
      // Create a copy of the tableData array
      const newData = [...tableData];
      // Update the specific row with the new values
      newData[row.index] = values;
      // Update the state with the new data
      setTableData(newData);
      exitEditingMode(); // required to exit editing mode
    };

  return (
    <MaterialReactTable
      columns={memoizedColumns}
      data={tableData}
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
      enableEditing
      onEditingRowSave={handleSaveRow}
    />
  );
};

export default Table;
