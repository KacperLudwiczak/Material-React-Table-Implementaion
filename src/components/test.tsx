import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MaterialReactTableProps,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";

// example data type
type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  subRows?: Person[];
};

const initData: Person[] = [
  {
    firstName: "John",
    lastName: "Doe",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
    subRows: [
      {
        firstName: "Ervin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
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
    firstName: "Jane",
    lastName: "Woed",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
    subRows: [
      {
        firstName: "Drvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Gordane",
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
    firstName: "Joe",
    lastName: "Game",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
    subRows: [
      {
        firstName: "Grvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Hordane",
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
    firstName: "Kevin",
    lastName: "Vandy",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
    subRows: [
      {
        firstName: "Holrvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Waordane",
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
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
    subRows: [
      {
        firstName: "Qvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Dane",
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
    firstName: "Doe",
    lastName: "Game",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
    subRows: [
      {
        firstName: "Grvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Hordane",
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
    firstName: "Evin",
    lastName: "Vandy",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
    subRows: [
      {
        firstName: "Holrvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Waordane",
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
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
    subRows: [
      {
        firstName: "Qvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Dane",
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
    firstName: "Doe",
    lastName: "Game",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
    subRows: [
      {
        firstName: "Grvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Hordane",
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
    firstName: "Evin",
    lastName: "Vandy",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
    subRows: [
      {
        firstName: "Holrvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Waordane",
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
    firstName: "Gshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
    subRows: [
      {
        firstName: "Qvin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Dane",
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

const SimpleTable = () => {
  const [data, setData] = useState<Person[]>(initData);

  // Track expanded state using a state variable
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  // should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
        renderCell: ({ row }: { row: MRT_Row<Person> }) => {
          const { original } = row;
          const { firstName, subRows } = original;
          const hasSubRows = subRows && subRows.length > 0;
          const isExpanded = expandedRows.includes(row.id);

          const toggleExpanded = () => {
            if (isExpanded) {
              setExpandedRows((prevExpandedRows) =>
                prevExpandedRows.filter((id) => id !== row.id)
              );
            } else {
              setExpandedRows((prevExpandedRows) => [
                ...prevExpandedRows,
                row.id,
              ]);
            }
          };

          return (
            <div>
              {hasSubRows && (
                <button type="button" onClick={toggleExpanded}>
                  {isExpanded ? "-" : "+"}
                </button>
              )}
              {firstName}
            </div>
          );
        },
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
        renderCell: ({ row }: { row: MRT_Row<Person> }) => {
          const { original } = row;
          const { lastName } = original;
          return <div>{lastName}</div>;
        },
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
        renderCell: ({ row }: { row: MRT_Row<Person> }) => {
          const { original } = row;
          const { address } = original;
          return <div>{address}</div>;
        },
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
        renderCell: ({ row }: { row: MRT_Row<Person> }) => {
          const { original } = row;
          const { city } = original;
          return <div>{city}</div>;
        },
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
        renderCell: ({ row }: { row: MRT_Row<Person> }) => {
          const { original } = row;
          const { state } = original;
          return <div>{state}</div>;
        },
      },
    ],
    [expandedRows]
  );

  const handleSaveRow: MaterialReactTableProps<Person>["onEditingRowSave"] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    if (row.original) {
      // Update existing row
      const updatedData = [...data];
      updatedData[row.index] = { ...values, subRows: row.original.subRows };
      setData(updatedData);
    } else {
      // Add new row
      setData((prevData) => [...prevData, values]);
    }
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
      enableExpanding
      enableExpandAll
      enableGlobalFilterModes
      editingMode="modal"
      enableEditing={true}
      onEditingRowSave={handleSaveRow}
      enableRowOrdering
      enableSorting={false}
      muiTableBodyRowDragHandleProps={({ table }) => ({
        onDragEnd: () => {
          const { draggingRow, hoveredRow } = table.getState();
          if (hoveredRow && draggingRow) {
            const updatedData = [...data];
            updatedData.splice(
              (hoveredRow as MRT_Row<Person>).index,
              0,
              updatedData.splice(draggingRow.index, 1)[0]
            );
            setData(updatedData);
          }
        },
      })}
    />
  );
};

export default SimpleTable;
