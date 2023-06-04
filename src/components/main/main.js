import React from "react";
import Intro from "./intro";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

class Main extends React.Component {

  render() {
    return (

      <main className="main">
        
        <Intro />
        <About />
        <Portfolio showMore={this.props.showMore}/>
        <Contact />

      </main>

    );
  }
}

export default Main;