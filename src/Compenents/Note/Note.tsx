import { Box, Button, Card, CardContent, CardActions, Grid, CardHeader, IconButton, Typography } from "@mui/material";


import DeleteForeverIcon from '@mui/icons-material/DeleteForever'


export interface propType {
    id: number;
    title: string;
    content: string;
}

const Note = (props: any) => {

    const { title, content } = props;



    const handleDeleteClick = () => {
        props.onDelete(props.id);

    }


    return (
        <Box data-testid="note-item"
            sx={{
                mb: 3
            }}
        >
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item={true} xs={4} md={4}>
                            <Box id="title">{title}</Box>
                        </Grid>

                        <Grid item={true} xs={2} md={2}>
                            <Box id="content">
                                {content}
                            </Box>
                        </Grid>

                        <Grid item={true} xs={1} md={1}>
                            <Box>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    onClick={handleDeleteClick}
                                >
                                    <DeleteForeverIcon></DeleteForeverIcon>
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>

        // <Card sx={{ minWidth: 275 }}>
        //     <CardContent>
        //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //             Word of the Day
        //         </Typography>
        //         <Typography variant="h5" component="div">
        //             a sample note
        //         </Typography>
        //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //             adjective
        //         </Typography>
        //         <Typography variant="body2">
        //             well meaning and kindly.
        //             <br />
        //             {'"a benevolent smile"'}
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small">Learn More</Button>
        //     </CardActions>
        // </Card>


    );
}

export default Note;
