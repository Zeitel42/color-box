import Search from "./Components/Search/Search";
import ColorBox from "./Components/ColorBox/ColorBox";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("");
  return (
    <div className="App">
      <ColorBox color={color} setColor={setColor} />
      <Search />
    </div>
  );
}

export default App;
