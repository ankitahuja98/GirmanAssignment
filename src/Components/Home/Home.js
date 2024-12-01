import React, { useState } from "react";
import Logo_url from "../../Images/GirmanLogo.png";
import "./Home.css";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { addsearchInput } from "../../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [SearchInput, SetSearchInput] = useState("");

  const handleSubmit = () => {
    dispatch(addsearchInput(SearchInput));
    SetSearchInput("");
    navigate("/search");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div
        className="NavbarSeprationcolor sticky top-16"
        style={{ height: "1rem" }}
      ></div>
      <div className="HomeDiv">
        <div className="homeBg mt-5 flex justify-center">
          <div>
            <div className="HomeBody flex justify-center ">
              <img className="BrandLogo" src={Logo_url} alt="brand_logo" />
              <p className="BrandName flex justify-center items-center">
                Girman
              </p>
            </div>
            <div className="SearchBarDiv">
              <SearchIcon className="HomeSearchIcon" onClick={handleSubmit} />
              <input
                className="HomeSearchBar"
                placeholder="Search"
                type="text"
                value={SearchInput}
                // autoFocus
                onChange={(e) => SetSearchInput(e.target.value)}
                onKeyDown={handleEnterKey}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
