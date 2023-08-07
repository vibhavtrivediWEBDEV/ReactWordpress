import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './table.css';
import Pagination from './Pagination';

function generateTable(data, styles, TableGRadstyles, TableHeaderstyles, Height, Width,currentPage, setCurrentPage, itemsPerPage,handlePageChange) {
    
   
  if (data.length === 0) {
    return null; // If data array is empty, return null or handle it accordingly
  }

  const keys = Object.keys(data[0]); // Get the keys from the first item in the data array

  // Create table header
  const tableHeader = (
    <tr>
      {keys.map((key, index) => (
        <th style={TableHeaderstyles} key={index}>
          {key}
        </th>
      ))}
    </tr>
  );


  // Calculate the index range of items to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  // Create table rows
  const tableRows = displayedItems.map((item, index) => (
    <tr key={index}>
      {keys.map((key, columnIndex) => (
        <td style={TableGRadstyles} key={columnIndex}>
          {item[key]}
        </td>
      ))}
    </tr>
  ));



  // Return the complete table
  return (
    <div className='glass-table'>
      <table>
        <thead>{tableHeader}</thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Pagination totalItems={data.length} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </div>
  );
}

function Table(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [tabledata, settabledata] = useState([]);
  const [fontSize, setFontSize] = useState(13);

  const gradient = `linear-gradient(71deg, #080509, #1a171c, ${props.gradient})`;
  const NOgradient = `linear-gradient(71deg, #080509, #1a171c, #333)`;

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const data = response.data;
        settabledata(data);
      })
      .catch((error) => {
        console.log(error);
      });

    const newFontSize = Math.floor((props.height / 200) * 18);
    if (props.height < 580 && props.column === 1) {
      setFontSize("36");
    } else {
      setFontSize(newFontSize);
    }
  }, []);

  const styles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${props.column}, 1fr)`,
  };

  let Width = props.column;
  // Number of items to display per page

  const TableHeaderstyles = {
    background: gradient,
    height: props.height,
    border: `3px solid ${props.gradient}`,
    color: '#fff',
    width: `${Width < 3 ? 400 : Width * 100}px`,
  };

  const TableGRadstyles = {
    background: NOgradient,
    height: props.height,
    borderLeft: `3px solid ${props.gradient}`,
    color:'grey',
    padding:'10px'
  };

  let Height = props.height / 5;
  var itemsPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    return (
        <>{Width}
            {generateTable(tabledata, styles, TableGRadstyles, TableHeaderstyles, Height, Width,currentPage,setCurrentPage,itemsPerPage,handlePageChange)}
        </>
    )
}

export default Table;