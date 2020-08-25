import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Movie from "./Movie";
import { Loader, Dimmer, Grid } from "semantic-ui-react";

export default function Movies() {
  const context = useContext(Context);

  const verticalMiddle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (context.loading) {
    return (
      <div style={verticalMiddle}>
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      </div>
    );
  }

  return (
    <>
      <Grid stackable columns={3}>
        {context.movie.Search &&
          context.movie.Search.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
      </Grid>
    </>
  );
}
