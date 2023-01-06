import "./header.css";
const Header = ({ colorValue, isDarkText }) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <h1>Color Box</h1>
    </header>
  );
};
export default Header;
