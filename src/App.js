import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "../src/Components/Home/Home";
import Search from "./Components/Search/Search";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/search" element={<Search />} />
      </Routes>
    </Provider>
  );
}

export default App;
