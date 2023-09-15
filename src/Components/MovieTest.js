import {useState, useEffect} from 'react';
import BasicRating from './Stars';
import ReviewForm from './ReviewForm';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// We fetch the data from the omdb api.


const API_URL = 'http://www.omdbapi.com/?s=star wars&apikey=2f5738bd';

const MovieData = () => { 
   const [movies, setMovies] = useState([]);

   useEffect(() => { 
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => { 
        console.log(data);
        setMovies(data.Search);
    })
    
   }, []);


   /* In the return statement the movie information is show and the star review system is put in place as well as the review form.
    Styled with Material UI. */

   return ( 
    <Grid container spacing={4}> 
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.imdbID}> 
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia sx={{ height: 500 }} image={movie.Poster} title={movie.Title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.Year}
              </Typography>
            </CardContent>
            <CardActions>
              <BasicRating />
              <ReviewForm />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieData;


      