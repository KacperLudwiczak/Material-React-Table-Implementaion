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
      columns={memoizedColumns} // This prop specifies the columns to be rendered in the table. It takes an array of column configurations, where memoizedColumns is likely a memoized value containing the column definitions.
      data={tableData} // This prop specifies the data to be displayed in the table. It takes an array of objects, where each object represents a row in the table. tableData is likely the data that should be rendered in the table.
      enableStickyHeader // This prop enables sticky headers for the table. When enabled, the table header will remain fixed at the top of the table, even when scrolling.
      enableColumnFilterModes // This prop enables column filtering modes. It allows users to filter the table data based on column values using different filter modes.
      enableColumnOrdering // This prop enables column reordering. It allows users to change the order of columns in the table by dragging and dropping them.
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
