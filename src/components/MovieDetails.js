import React, { useState, useEffect } from "react";
import { Button, Icon, Grid } from "semantic-ui-react";
import Poster from "./Poster";
import Details from "./Details";
import { Link } from "react-router-dom";

function MovieDetails(props) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async (URL) => {
      try {
        const data = await fetch(URL);
        const json = await data.json();

        setMovie(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie(
      `http://www.omdbapi.com/?i=${props.match.params.movieID}&apikey=2df6ffde`
    );
  });
  console.log(movie);

  return (
    <>
      <Link to="/">
        <Button animated style={{ marginTop: "1rem" }} primary>
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
      <Grid stackable columns={2} style={{ marginTop: "2rem" }}>
        <Grid.Column>
          <Poster movie={movie} />
        </Grid.Column>
        <Grid.Column>
          <Details movie={movie} />
        </Grid.Column>
      </Grid>
    </>
  );
}

export default MovieDetails;
