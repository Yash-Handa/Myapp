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
      </div>
      <Footer />
    </div>
  );
}

export default App;
