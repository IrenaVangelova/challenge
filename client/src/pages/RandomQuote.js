import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material';
import {Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const RandomQuote = () => {

    const [randomQuotesData, setRandomQuoteData] = useState([]);

    useEffect(() => {
      fetch("https://api.quotable.io/random")
      .then((data) => data.json())
        .then((data) => setRandomQuoteData(data));
      },[])

    console.log(randomQuotesData);
    
    return (
        <div>
            <Card sx={{ minWidth: 100 }} variant="outlined">
                <CardContent>
                    <Typography variant="h3" component="h4">

                        {randomQuotesData.author}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {randomQuotesData.content}
                    </Typography>
                </CardContent>
            </Card>
            <Button variant="contained" href="http://localhost:3000/">Back</Button>
            <Button variant="contained" href="http://localhost:3000/random-quote">Random Quote</Button>
        </div>
  );


}

export default RandomQuote;
