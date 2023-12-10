import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, duration } from '@mui/material';
import { dummyText, dummyTitle, getFormattedDate } from '../global/global';
import PlaceHolderImg from "../assests/placeholder.jpg"
const NewsCard = (props) => {
    const {urlToImage, title, description, publishedAt } = props.newsObj;

    // transformation
    const transformedDate = getFormattedDate(publishedAt);
    const transformedDesc = description ? description.substring(0,150) : dummyText;
    const transformedTitle = title ? title.substring(0,30): dummyTitle;
    
    return (
        <Card sx={{
            borderRadius:'28px',
            boxShadow:'none',
            transitionDuration:'500ms',
            overflow:'hidden',
            height:'100%'
        }} className='' >
            <CardActionArea >
                
                <CardMedia
                    component="img"
                    height=""
                    image={urlToImage ? urlToImage : PlaceHolderImg}
                    alt={title}
                    className='h-[170px] hover:scale-105 duration-300 '
                />
                <CardContent className=''>
                    <Typography gutterBottom variant="h5" component="div" className='text-rtl'>
                    {transformedTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='py-1 text-rtl'>
                        {transformedDesc}
                    </Typography>
                    <Box sx={{textAlign:'end', fontWeight:'700', fontStyle:'italic',marginTop:'8px'}}>
                        <span className='text-rtl'>{transformedDate}</span>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default NewsCard