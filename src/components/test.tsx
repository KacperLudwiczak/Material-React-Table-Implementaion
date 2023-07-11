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

const SimpleTableEdit = () => {
  const [data, setData] = useState(() => initData);

  // should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
        editVariant: "text",
        enableEditing: true,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
        editVariant: "text",
        enableEditing: true,
      },
      {
        header: "Information",
        size: 450,
        columns: [
          {
            accessorKey: "address",
            header: "Address",
            size: 150,
            editVariant: "text",
            enableEditing: true,
          },
          {
            accessorKey: "city",
            header: "City",
            size: 150,
            editVariant: "text",
            enableEditing: true,
          },
          {
            accessorKey: "state",
            header: "State",
            size: 150,
            editVariant: "select",
            editSelectOptions: [
              "Option 1",
              "Option 2",
              { text: "Option 3", value: "option_3" },
            ],
            enableEditing: true,
          },
        ],
      },
    ],
    []
  );

  const handleSaveRow: MaterialReactTableProps<Person>["onEditingRowSave"] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    data[row.index] = values;
    setData([...data]);
    exitEditingMode();
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
      enableExpandAll
      enableGlobalFilterModes
      editingMode="modal"
      enableEditing={true}
      onEditingRowSave={handleSaveRow}
      autoResetPageIndex={false}
      enableRowOrdering
      muiTableBodyRowDragHandleProps={({ table }) => ({
        onDragEnd: () => {
          const { draggingRow, hoveredRow } = table.getState();
          if (hoveredRow && draggingRow) {
            data.splice(
              Number(hoveredRow.index),
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

export default SimpleTableEdit;
