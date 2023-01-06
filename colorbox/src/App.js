import Search from "./Components/Search/Search";
import ColorBox from "./Components/ColorBox/ColorBox";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Header colorValue={colorValue} isDarkText={isDarkText} />
      <ColorBox
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Search
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <Footer colorValue={colorValue} isDarkText={isDarkText} />
    </div>
  );
}

export default App;
