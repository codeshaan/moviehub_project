import React from "react";
import { Placeholder, Image } from "semantic-ui-react";

export default function Poster(props) {
  if (!props.movie.Poster) {
    return (
      <Placeholder style={{ height: "100%", width: "100%" }}>
        <Placeholder.Image />
      </Placeholder>
    );
  }

  return <Image src={props.movie.Poster} fluid />;
}
