import Search from "./Components/Search/Search";
import ColorBox from "./Components/ColorBox/ColorBox";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  return (
    <div className="App">
      <ColorBox colorValue={colorValue} hexValue={hexValue} />
      <Search
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
