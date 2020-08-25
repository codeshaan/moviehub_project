import React from "react";
import { Grid, Icon, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <Grid.Column>
      <Link to={`/movies/${props.movie.imdbID}`}>
        <Card>
          <Image src={props.movie.Poster} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.movie.Title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Icon name="calendar" />
            {props.movie.Year}
          </Card.Content>
        </Card>
      </Link>
    </Grid.Column>
  );
}

export default Movie;
