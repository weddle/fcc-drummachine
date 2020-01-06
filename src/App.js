import React from "react";

import DrumMachine from "./containers/DrumMachine/DrumMachine";
import drumConfig from "./config/DrumConfig";

function App() {
  return <DrumMachine config={drumConfig} />;
}

export default App;
