import ReactDOM from "react-dom/client";
import "../index.css"; // Make sure to import the CSS file
import Header from "./components/Header";
import Body from "./components/Body";



const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
