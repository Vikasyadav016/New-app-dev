

/*
Purpose of Master table is to use globally in mater component of project.
In Using component send props like columns, data, heading colors if needed(optional), action buttons(may be multiple or not any),required data for pagination,
background color of rows(optional), onClick on row(optional), checkbox on each row(optional)
Pagination should be a seperate component which can be used any where if needed so adjust like that,

Abobe heading there should be a seach option by entering any coloumn heading name if that data exist will be shown.
this seach shold be show based on a check if want to show or not on ui in any component.
Make this more optimized and as i can easlily maintain and use 



Write css for this Master table component, i have not to use inline css.
MasterTable.css is my css file.

*/
import React, { useState, useMemo, ReactNode } from "react";

import "./MasterTable.css";
import Pagination from "../../Pagination/Pagination";

interface Column {
  key: string;
  label: string;
}

interface PaginationProps {
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (newPage: number) => void;
}

interface MasterTableProps {
  columns: Column[];
  data: any[]; // You can improve by making this generic if you want
  headingColor?: string;
  rowBgColor?: string;
  showSearch?: boolean;
  actionButtons?: Array<ReactNode | ((props: { row: any }) => ReactNode)>;
  onRowClick?: (rowData: any) => void;
  showCheckbox?: boolean;
  pagination?: PaginationProps;
}

const MasterTable: React.FC<MasterTableProps> = ({
  columns,
  data,
  headingColor = "#007BFF",
  rowBgColor,
  showSearch = false,
  actionButtons = [],
  onRowClick,
  showCheckbox = false,
  pagination,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    const lowerSearch = searchTerm.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        const val = row[col.key];
        return val?.toString().toLowerCase().includes(lowerSearch);
      })
    );
  }, [searchTerm, data, columns]);

  const pagedData = useMemo(() => {
    if (!pagination) return filteredData;

    const start = (pagination.page - 1) * pagination.pageSize;
    const end = start + pagination.pageSize;
    return filteredData.slice(start, end);
  }, [filteredData, pagination]);

  return (
    <div className="master-table-container">
      {showSearch && (
        <div className="master-table-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <table
        className="master-table"
        style={{ 
          backgroundColor: rowBgColor || "transparent",
          // CSS variable for heading color
          "--heading-color": headingColor,
        } as React.CSSProperties}
      >
        <thead>
          <tr>
            {showCheckbox && (
              <th className="master-table-checkbox-cell">
                <input type="checkbox" />
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            {actionButtons.length > 0 && (
              <th className="master-table-action-cell">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {pagedData.length === 0 ? (
            <tr>
              <td
                colSpan={
                  columns.length +
                  (showCheckbox ? 1 : 0) +
                  (actionButtons.length > 0 ? 1 : 0)
                }
                style={{ textAlign: "center" }}
              >
                No data found
              </td>
            </tr>
          ) : (
            pagedData.map((row, idx) => (
              <tr
                key={idx}
                onClick={() => onRowClick && onRowClick(row)}
                style={{ backgroundColor: rowBgColor || "transparent" }}
              >
                {showCheckbox && (
                  <td className="master-table-checkbox-cell">
                    <input type="checkbox" />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
                {actionButtons.length > 0 && (
                  <td className="master-table-action-cell">
                    {actionButtons.map((ActionButton, i) => (
                      <span key={i} style={{ marginRight: 8 }}>
                        {typeof ActionButton === "function"
                          ? ActionButton({ row })
                          : ActionButton}
                      </span>
                    ))}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {pagination && (
        <Pagination
          page={pagination.page}
          pageSize={pagination.pageSize}
          totalCount={filteredData.length}
          onPageChange={pagination.onPageChange}
        />
      )}
    </div>
  );
};

export default MasterTable;
