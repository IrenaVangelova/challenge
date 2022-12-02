import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";

const columns = [
  { field: '_id', headerName: 'ID', width: 150 },
  { field: 'author', headerName: 'Author', width: 200 },
  { field: 'content', headerName: 'Content', width: 800 },
  { field: 'nationality', headerName: 'Nationality', width: 100 }
];

const Quotes = () => {

    const [quotesData, setQuoteData] = useState([]);

    useEffect(() => {
      fetch("https://api.quotable.io/quotes")
      .then((data) => data.json())
        .then((data) => setQuoteData(data.results));
      },[])

    console.log(quotesData);

    const getNationality = (name) => {
      let nationality = null;

      fetch("https://api.nationalize.io/?name=" + name, {method: 'GET', mode: "no-cors", headers: {
        'Content-Type': 'application/json'
      } })
      .then((data) => console.log(data))
    }

    getNationality("Michael");
    
  return (
    <div style={{ height: 630, width: '100%' }}>
    <DataGrid
      getRowId={(row) => row._id}
      rows={quotesData}
      columns={columns}
      pageSize={10}
    />
    <Button variant="contained" href="http://localhost:3000/random-quote">Random Quote</Button>
    </div>
  );

}

export default Quotes;
