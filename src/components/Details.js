import React from "react";
import { Placeholder, Header } from "semantic-ui-react";

export default function Details(props) {
  if (!props.movie.Poster) {
    return (
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    );
  }

  return (
    <>
      <Header as="h1">{props.movie.Title}</Header>
      <Header as="h5">Actors: {props.movie.Actors}</Header>
      <Header as="h5">Director: {props.movie.Director}</Header>
      <Header as="h5">Awards: {props.movie.Awards}</Header>
      <Header as="h5">Genre: {props.movie.Genre}</Header>
      <Header as="h5">Languages: {props.movie.Language}</Header>
      <Header as="h5">Released: {props.movie.Released}</Header>
      <Header as="h5">Writer: {props.movie.Writer}</Header>
      <Header as="h5">Imdb Rating: {props.movie.imdbRating}</Header>
    </>
  );
}
