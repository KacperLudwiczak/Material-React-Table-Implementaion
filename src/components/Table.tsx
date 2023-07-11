import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MaterialReactTableProps,
  MRT_Row,
} from "material-react-table";
import { initData } from "./data"; // Import the data from the separate file

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

  const [data, setData] = useState(() => initData);

  // const handleSaveRow: MaterialReactTableProps<Person>["onEditingRowSave"] = ({
  //   exitEditingMode,
  //   row,
  //   values,
  // }) => {
  //   const newData = [...data];
  //   newData[row.index] = values;
  //   setData(newData);
  //   exitEditingMode();
  // };

  return (
    <MaterialReactTable
      columns={memoizedColumns} // This prop specifies the columns to be rendered in the table. It takes an array of column configurations, where memoizedColumns is likely a memoized value containing the column definitions.
      data={data} // This prop specifies the data to be displayed in the table. It takes an array of objects, where each object represents a row in the table. tableData is likely the data that should be rendered in the table.
      enableClickToCopy // It copy the item by clicking on it.
      enableStickyHeader // This prop enables sticky headers for the table. When enabled, the table header will remain fixed at the top of the table, even when scrolling.
      enableColumnFilterModes // This prop enables column filtering modes. It allows users to filter the table data based on column values using different filter modes.
      enableColumnOrdering // This prop enables column reordering. It allows users to change the order of columns in the table by dragging and dropping them.
      enableGrouping // This prop enables grouping of rows based on column values. It allows users to group rows together based on a specific column value.
      enablePinning // This prop enables pinning of columns. It allows users to pin specific columns to the left or right side of the table, keeping them fixed while scrolling horizontally.
      enableRowActions // This prop enables row actions. It provides options for performing actions on individual rows, such as editing or deleting.
      enableRowSelection // This prop enables row selection. It allows users to select one or multiple rows in the table.
      enableExpanding //  This prop enables row expanding. It provides a mechanism to expand rows and show additional details or nested content for a particular row.
      enableExpandAll //  This prop enables expanding all rows. It allows users to expand all rows in the table simultaneously.
      enableGlobalFilterModes // This prop enables global filter modes. It provides options for filtering the entire table based on a search term using different filter modes.
      editingMode="modal" // This prop sets the editing mode for the table to "modal." It suggests that the table supports editing rows using a modal interface.
      enableEditing={true} // This prop enables editing of rows in the table. It allows users to modify the values of individual cells in the table.
      // onEditingRowSave={handleSaveRow} // This prop specifies a callback function handleSaveRow to be called when a row is saved after editing. It is responsible for handling the logic of saving the edited row.
      autoResetPageIndex={false} // This prop determines whether the page index should be automatically reset when the table data changes. When set to false, the table will maintain the current page index when the data updates.
      enableRowOrdering // This prop enables column reordering. It allows users to change the order of columns in the table
      enableSorting={false} // This prop disables sorting in the table. When set to false, users cannot sort the table data by clicking on the column headers.
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

export default Table;
