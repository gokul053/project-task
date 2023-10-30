import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import cardImage from "../assets/image/headerImage.jpg"
import { useDispatch, useSelector } from "react-redux";
import { getAllSport, getAllSportPhoto } from "../redux/actions/sportAction";
import React, { useEffect } from "react";

const HomePage = () => {
    const dispatch = useDispatch();
    const getAllSportsData = useSelector((state)=> state?.getAllSport?.getSportsModal?.data);
    const getAllSportPhotoData = useSelector((state)=> state?.getAllSportPhoto?.getSportPhotoModal?.data);
    const getImage = (id) => {
        return getAllSportPhotoData?.find(data => data.sport.id === id)?.url;
    } 
    useEffect(()=>{
        dispatch(getAllSport());
        dispatch(getAllSportPhoto());
        // eslint-disable-next-line
    },[]);
    return (
        <>
            <Container>
                    <Grid container paddingBottom={4}>
                        <Grid xs={12} item paddingY={3} textAlign={"center"}>
                            <Typography variant="h4">
                                Games & Entertainment
                            </Typography>
                            <Typography paddingTop={2} variant="body1">
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            int, and publishing industries for previewing layouts and visual mockups.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={{ xs: 2, md: 3 }}>
                                {console.log(getAllSportsData)}
                                {getAllSportsData?.map((sport, index)=>{
                                    return(
                                        <React.Fragment key={index}>
                                            <Grid item xs={3}>
                                                <Card  >
                                                    <CardActionArea>
                                                        <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={cardImage}
                                                        alt="green iguana"
                                                        />
                                                        <CardContent sx={{padding:1}}>
                                                            <Box>
                                                            <Grid container alignItems="center">
                                                                <Grid item display="flex" alignItems="center" flexWrap="wrap" marginRight="auto">
                                                                    <img width={35} src={getImage(sport?.id)} alt="logo" /> 
                                                                    <Typography marginLeft={1} variant="caption">
                                                                        {sport?.title}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item marginLeft="auto">
                                                                    <Typography variant="caption">
                                                                        1 courts
                                                                    </Typography>
                                                                </Grid>
                                                                </Grid>
                                                            </Box>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                        </React.Fragment>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
            </Container>
            <Outlet />
        </>
    );
}

export default HomePage;