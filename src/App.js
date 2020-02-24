import React from "react";
import "./App.css";
import NTths from "./Components/ntths";
import Forsa from "./Components/forsa";
import Bahr from "./Components/bahr";
import Jahz from "./Components/jahz";
import Kushk from "./Components/kushk";
import { FullPage, Slide } from "react-full-page";
import SliderPage from "react-slider-page";

function App() {
  return (
    <div className="App">
      <FullPage>
        <Slide>
          <NTths />
        </Slide>
        <Slide>
          <Forsa />
        </Slide>
        <Slide>
          <Bahr />
        </Slide>
        {/* <Slide>
          <Kushk />
        </Slide> */}
      </FullPage>
    </div>
  );
}

export default App;
