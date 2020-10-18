import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Hello React</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          cupiditate corporis illo ipsam voluptatem, voluptas ipsa accusamus.
          Porro ad aut perferendis aliquam! Laboriosam non molestias nostrum
          officia aperiam tempore similique?
        </p>
        <a href="#" class="cta">
          <span>Click me</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
