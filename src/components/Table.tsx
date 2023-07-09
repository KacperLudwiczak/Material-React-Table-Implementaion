import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MaterialReactTableProps,
  MRT_Row,
} from "material-react-table";
import { data } from "./data"; // Import the data from the separate file

// example data type
type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  subRows?: Person[];
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

  const handleSaveRow: MaterialReactTableProps<Person>["onEditingRowSave"] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    const newData = [...tableData];
    newData[row.index] = values;
    setTableData(newData);
    exitEditingMode();
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
      enableEditing={true}
      onEditingRowSave={handleSaveRow}
      autoResetPageIndex={false}
      enableRowOrdering
      enableSorting={false}
      muiTableBodyRowDragHandleProps={({ table }) => ({
        onDragEnd: () => {
          const { draggingRow, hoveredRow } = table.getState();
          if (hoveredRow && draggingRow) {
            const updatedData = [...tableData];
            updatedData.splice(
              (hoveredRow as MRT_Row<Person>).index,
              0,
              updatedData.splice(draggingRow.index, 1)[0]
            );
            setTableData(updatedData);
          }
        },
      })}
    />
  );
};

export default Table;
