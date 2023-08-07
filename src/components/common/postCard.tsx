import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import Link from 'next/link';


interface PostCardProps {
    id?:string
    image?: string
    title?:string
    description?:string
}

const PostCard:FC<PostCardProps> = ({image, title,id, description}) => {
    return (
        <Link href={`/posts/${id}`} className='drop-shadow-md hover:drop-shadow-xl'>
            <Card sx={{ maxWidth: 400, width:'100%', height:390, maxHeight:390 }}>
            <CardMedia
                sx={{ height: 240 }}
                image={image}
                title={title}
                component='img'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            </Card>
        </Link>
    )
}

export default PostCard;