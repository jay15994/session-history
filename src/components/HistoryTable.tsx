import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type SessionHistory = {
  startTime: string;
  date: string;
  duration: string;
  nodeUsed: string;
  dataConsumed: string;
  NodeLocation: string;
};

const defaultData: SessionHistory[] = [
  {
    startTime: '11:43:23',
    date: '27-07-2023',
    duration: '0.234 sec',
    nodeUsed: 'Wiregaurd',
    dataConsumed: '0.15 MB',
    NodeLocation: 'Singapore',
  },
  {
    startTime: '11:43:23',
    date: '27-07-2023',
    duration: '0.234 sec',
    nodeUsed: 'Wiregaurd',
    dataConsumed: '0.15 MB',
    NodeLocation: 'Singapore',
  },
  {
    startTime: '11:43:23',
    date: '27-07-2023',
    duration: '0.234 sec',
    nodeUsed: 'Wiregaurd',
    dataConsumed: '0.15 MB',
    NodeLocation: 'Singapore',
  },
  {
    startTime: '11:43:23',
    date: '27-07-2023',
    duration: '0.234 sec',
    nodeUsed: 'V2Ray',
    dataConsumed: '0.15 MB',
    NodeLocation: 'Singapore',
  },
  {
    startTime: '11:43:23',
    date: '27-07-2023',
    duration: '0.234 sec',
    nodeUsed: 'V2Ray',
    dataConsumed: '0.15 MB',
    NodeLocation: 'Singapore',
  },
  {
    startTime: '11:43:23',
    date: '27-07-2023',
    duration: '0.234 sec',
    nodeUsed: 'OpenVPN',
    dataConsumed: '0.15 MB',
    NodeLocation: 'Singapore',
  },
];

const columnHelper = createColumnHelper<SessionHistory>();

const columns = [
  columnHelper.accessor('startTime', {
    id: 'startTime',
    header: () => <span>Sessions start time</span>,
  }),
  columnHelper.accessor('date', {
    id: 'date',
    header: () => <span>Date</span>,
  }),
  columnHelper.accessor('duration', {
    id: 'duration',
    header: () => <span>Duration</span>,
  }),
  columnHelper.accessor('nodeUsed', {
    id: 'nodeUsed',
    header: () => <span>Node Used</span>,
  }),
  columnHelper.accessor('dataConsumed', {
    id: 'dataConsumed',
    header: () => <span>Data Consumed</span>,
  }),
  columnHelper.accessor('NodeLocation', {
    id: 'NodeLocation',
    header: () => <span>Location of Node</span>,
  }),
];

const HistoryTable = () => {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="card w-full">
      <p className="title mb-8">Session History</p>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup: any) => (
            <tr key={headerGroup.id} className="h-12 bg-[#161A25]">
              {headerGroup.headers.map((header: any) => (
                <th
                  key={header.id}
                  className="text-[16px] text-[#CBCBCB] text-start font-light leading-none"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: any) => (
            <tr key={row.id} className="h-12">
              {row.getVisibleCells().map((cell: any) => (
                <td key={cell.id} className="text-[16px] text-[#CBCBCB] font-light leading-none">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
