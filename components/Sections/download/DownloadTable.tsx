"use client"

import { AgGridReact } from 'ag-grid-react';
import "@/styles/ag-grid-theme.css";
import { useEffect, useState } from 'react';
import { getParsedReleases } from '@/lib/getReleases.tsx';
import { parseNumber } from '@/lib/utils';
import Downloads from './downloads';
import Link from 'next/link';

export default function DownloadTable() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colDefs, setColDefs]: any[] = useState();

  const handleGridReady = (params: any) => {
    // params.api.sizeColumnsToFit();
    
  }

  useEffect(() => {
    setColDefs(
      [
        { field: "version", pinned: true, movable: false, width: 126 },
        {
          field: "code",
          headerName: "Source Code",
          cellRenderer: (params: any) => {
            return (
              <Link href={params.value} className="text-blue-500">
                Open
              </Link>
            );
          },
          width: 115,
        },
        {
          field: "downloads",
          cellRenderer: (params: any) => {
            return parseNumber(params.value);
          },
          width: 115,
        },
        {
          field: "v121",
          headerName: "v1.21",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <Link href={params.value} className="text-blue-500">
                Download
              </Link>
            );
          },
          width: 160
        },
        {
          field: "v1206",
          headerName: "v1.20.6",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <Link href={params.value} className="text-blue-500">
                Download
              </Link>
            );
          },
          width: 160
        },
        {
          field: "v1204",
          headerName: "v1.20.4",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <Link href={params.value} className="text-blue-500">
                Download
              </Link>
            );
          },
          width: 160
        },
        {
          field: "v1202",
          headerName: "v1.20.2",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <Link href={params.value} className="text-blue-500">
                Download
              </Link>
            );
          },
          width: 160
        },
        {
          field: "v120",
          headerName: "v1.20",
          cellRenderer: (params: any) => {
            return params.value === null ? (
              "Not available"
            ) : (
              <Link href={params.value} className="text-blue-500">
                Download
              </Link>
            );
          },
          width: 160
        },
      ]
    );
    const loadReleases = async () => {
      try {
        const releases = await getParsedReleases();
        setRowData(releases);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error("Loading releases failed!")
      }
    };

    loadReleases();
  }, []);



  return (
    <div className="my-4">
      <Downloads />
      
    <div
      className="ag-theme-custom h-[467px]"
    >
      <AgGridReact
        columnDefs={colDefs}
        rowData={rowData}
        loading={loading}
        suppressTouch={false}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30, 50, 100]}
        onGridReady={handleGridReady}
        paginationAutoPageSize={true}
        suppressMenuHide={true}
      />
    </div>
    </div>
  )
}