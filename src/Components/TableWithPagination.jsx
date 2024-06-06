import React, { useState } from 'react';
import './TableWithPagination.css';

const TableWithPagination = () => {
  const sampleData = [
    { id: 1, name: 'John', age: 30, dateTime: '2024-03-30T12:00:00', status: 'Completed' },
    { id: 2, name: 'Alice', age: 25, dateTime: '2024-03-29T14:30:00', status: 'Pending' },
    { id: 3, name: 'Bob', age: 35, dateTime: '2024-03-28T09:45:00', status: 'Ongoing' },
    { id: 4, name: 'Emma', age: 28, dateTime: '2024-03-27T11:20:00', status: 'Completed' },
    { id: 5, name: 'Mike', age: 40, dateTime: '2024-03-26T08:15:00', status: 'Pending' },
    { id: 6, name: 'Sarah', age: 32, dateTime: '2024-03-25T16:00:00', status: 'Ongoing' },
    { id: 7, name: 'David', age: 27, dateTime: '2024-03-24T13:45:00', status: 'Completed' },
    { id: 8, name: 'Emily', age: 33, dateTime: '2024-03-23T10:30:00', status: 'Pending' },
    { id: 9, name: 'James', age: 29, dateTime: '2024-03-22T18:20:00', status: 'Ongoing' },
    { id: 10, name: 'Sophia', age: 37, dateTime: '2024-03-21T15:10:00', status: 'Completed' },
  ];

  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(3);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const lastIndex = page * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const currentData = sampleData.slice(firstIndex, lastIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setSelectAllChecked(false);
    setSelectedItems([]);
  };
    const handleSelectAllChange = () => {
        setSelectAllChecked(!selectAllChecked);
        const allIds = currentData.map((item) => item.id);
        setSelectedItems(selectAllChecked ? [] : allIds);
      };
    
      const handleCheckboxChange = (id) => {
        const selectedIndex = selectedItems.indexOf(id);
        let newSelectedItems = [...selectedItems];
        if (selectedIndex === -1) {
          newSelectedItems.push(id);
        } else {
          newSelectedItems.splice(selectedIndex, 1);
        }
        setSelectedItems(newSelectedItems);
        setSelectAllChecked(newSelectedItems.length === currentData.length);
      };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sampleData.length / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead style={{ backgroundColor: '#EEF0F4' }}>
          <tr>
          <th>
              <input
                type="checkbox"
                checked={selectAllChecked}
                onChange={handleSelectAllChange}
              />
            </th>
            <th>No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date & Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={row.id}>
              <td>
              <input
                  type="checkbox"
                  checked={selectedItems.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              <td>{index + 1}</td>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{new Date(row.dateTime).toLocaleString()}</td>
              <td style={{ color: getStatusColor(row.status) }}>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination-button" disabled={page === 1} onClick={() => handlePageChange(1)}>
          {"<<"}
        </button>
        <button className="pagination-button" disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
          {"<"}
        </button>
        {pageNumbers.map((pageNumber) => (
          <button 
            key={pageNumber} 
            className={`pagination-button ${pageNumber === page ? 'active' : ''}`} // Apply active class to the current page number
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button className="pagination-button" disabled={lastIndex >= sampleData.length} onClick={() => handlePageChange(page + 1)}>
          {">"}
        </button>
        <button className="pagination-button" disabled={lastIndex >= sampleData.length} onClick={() => handlePageChange(Math.ceil(sampleData.length / rowsPerPage))}>
          {">>"}
        </button>
      </div>
    </div>
  );
};

const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'green';
      case 'Pending':
        return 'red';
      case 'Ongoing':
        return 'orange';
      default:
        return 'black';
    }
  };

export default TableWithPagination;
