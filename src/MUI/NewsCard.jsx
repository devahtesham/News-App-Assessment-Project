import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

const NewsCard = (newsObj) => {
    return (
        <Card className='flex-grow-0 flex-shrink-0 basis-[315px] mb-4 rounded-md' >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://www.euractiv.com/wp-content/uploads/sites/2/2023/12/Tech-Brief-1-800x450.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        News Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='py-1'>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <Box sx={{textAlign:'end', fontWeight:'700', fontStyle:'italic',marginTop:'8px'}}>
                        <span>2023-12-08</span>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default NewsCard