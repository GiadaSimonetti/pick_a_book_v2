import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Title from "./styled/title";
// import Background from "./styled/background";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Title>Welcome to PickABook!</Title>
        {sessionStorage.getItem("username") && (
          <Title primary>Hello {sessionStorage.getItem("username")}!</Title>
        )}
        <h4>Rather than leave your books on the shelf never to be opened again, or worse, to be thrown away, try swapping them using PickABook!</h4><br/>
        <p>Join today and swap books with other members of our community. PickABook helps you by giving away books you no longer need in exchange for books you really want.</p><br/>
        <h4>Interesting facts about books:</h4>
        <blockquote>There are over 129 million books in existence.</blockquote>
        <blockquote>The first book ever written using a typewriter was The Adventures of Tom Sawyer.</blockquote>
        <blockquote>Books used to be chained to shelves in libraries, in order to prevent stealing.</blockquote>
        <blockquote>An estimated 755,755 new books are published every year.</blockquote>
        <blockquote>The Japanese word ‘tsundoku’ apparently means “buying lots of books and then never getting around to reading them.</blockquote>
      </div>
    );
  }
}

module.exports = Home;
