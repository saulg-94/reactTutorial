import React from "react";
import ReactDOM from "react-dom";

// CSS

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg"
    alt=""
  />
);

const Title = () => <h1>I Love You to the Moon and Back</h1>;

const Author = () => <h4>Amelia Hepworth</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
