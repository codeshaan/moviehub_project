import React, { useContext, useState } from "react";
import { Header as HD, Input, Message } from "semantic-ui-react";
import { Context } from "../Context/Context";

function Form() {
  const [movie, setMovie] = useState("");
  const context = useContext(Context);

  function Error() {
    return (
      <Message negative style={{ margin: "2rem 0" }}>
        <Message.Header>Sorry....No Movie found!</Message.Header>
        <p>Try again with another Movie name!</p>
      </Message>
    );
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    context.getMovieName(movie);
  }

  return (
    <header>
      <HD as="h1" textAlign="center" color="blue">
        Search for a Movie!
      </HD>
      <form onSubmit={handleFormSubmit}>
        <Input
          fluid
          icon="search"
          placeholder="Search..."
          onChange={(e) => setMovie(e.target.value)}
        />
      </form>
      {context.movie.Response === "False" && <Error />}
    </header>
  );
}

export default Form;
