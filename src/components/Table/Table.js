import React, { useEffect, useCallback, useState } from 'react';

import { Table as LibTable } from 'antd';
import { KeywordsService } from '../../services/KeywordsService';
import { rowColor } from './assets'

const Table = () => {
  const [tableData, setTableData] = useState([]);

  const getResults = useCallback(async () => {
    const results = await KeywordsService.getKeywords();
    setTableData(results);
  }, [])

  useEffect(() => {
    getResults();   
  }, [getResults]);

  const columns = Object.keys((tableData?.[0] || {}))?.map((column) => {
    return {
      title: column,
      dataIndex: column,
      key: column,
      render:(_, rec) => {

        if (column === 'trend') {
          return (
            <span style={{ color: rowColor[rec[column]] }}>
              {rec[column]}
            </span>
          )
        }

        return <span>{rec[column]}</span>
      }
    }
  })

  return (
    <div data-testid="table-container">
      <LibTable
        rowKey="id"
        dataSource={tableData}
        pagination={false}
        columns={columns || []}
      />
    </div>
  );
};

export default Table;
export { Table };
