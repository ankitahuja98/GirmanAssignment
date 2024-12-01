import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import GirmanNavLogo from "../../Images/GirmanNavLogo.png";
import Menu from "../../Images/hamburger.png";
import Close from "../../Images/close.png";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { addsearchInput } from "../../utils/cartSlice";
import useWindowDimensions from "../../utils/useWindowDimensions";

const Navbar = () => {
  const [menu, SetMenu] = useState("none");
  const [NavIcon, setNavIcon] = useState(Menu);
  const { width } = useWindowDimensions();

  const MenuBtn = () => {
    if (menu !== "none") {
      setNavIcon(Menu);
      SetMenu("none");
    } else {
      setNavIcon(Close);
      SetMenu("block");
    }
  };

  const dispatch = useDispatch();
  const [SearchInput, SetSearchInput] = useState();

  const searchIpt = useSelector((store) => {
    return store.cart.searchInput;
  });

  useEffect(() => {
    SetSearchInput(searchIpt);
  }, [searchIpt]);

  const location = useLocation();
  const [url, setUrl] = useState("/");
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const navigate = useNavigate();

  const GetHomePage = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    dispatch(addsearchInput(SearchInput));
    SetSearchInput("");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="Navbar z-50">
        <div className="Nav">
          <div className="NavContainer">
            <div className="NavLogo">
              <img src={GirmanNavLogo} alt="logo" onClick={GetHomePage} />
            </div>

            {url !== "/search" ? (
              <div
                className="NavItems"
                id="NavItemsID"
                style={{ display: menu }}
              >
                <Link
                  className={
                    "NavLink" +
                    (url === "/" || url === "/search" ? " active" : "")
                  }
                  to="search"
                  onClick={MenuBtn}
                >
                  SEARCH
                </Link>
                <p className="NavBtn">
                  <a
                    className="NavLink"
                    href="https://girmantech.com/"
                    rel="noreferrer"
                    target="_blank"
                    onClick={MenuBtn}
                  >
                    WEBSITE
                  </a>
                </p>
                <p className="NavBtn">
                  <a
                    className="NavLink"
                    href="https://www.linkedin.com/company/girmantech/"
                    rel="noreferrer"
                    target="_blank"
                    onClick={MenuBtn}
                  >
                    LINKEDIN
                  </a>
                </p>
                <p className="NavBtn">
                  <Link
                    className="NavLink"
                    onClick={(e) => {
                      window.location.href = `mailto:contact@girmantech.com`;
                      e.preventDefault();
                      MenuBtn();
                    }}
                  >
                    CONTACT
                  </Link>
                </p>
              </div>
            ) : (
              <div className="NavbarSearchBar">
                <SearchIcon
                  className="cursor-pointer relative bottom-0.5 right-5 z-50"
                  onClick={handleSubmit}
                />
                <input
                  className="NavSearchBar"
                  placeholder="Search"
                  type="text"
                  value={SearchInput}
                  onChange={(e) => SetSearchInput(e.target.value)}
                  onKeyDown={handleEnterKey}
                />
              </div>
            )}

            {url === "/search" && width < 700 ? (
              <div
                className="NavItems"
                id="NavItemsID"
                style={{ display: menu }}
              >
                <Link
                  className={
                    "NavLink" +
                    (url === "/" || url === "/search" ? " active" : "")
                  }
                  to="search"
                  onClick={MenuBtn}
                >
                  SEARCH
                </Link>
                <p className="NavBtn">
                  <a
                    className="NavLink"
                    href="https://girmantech.com/"
                    rel="noreferrer"
                    target="_blank"
                    onClick={MenuBtn}
                  >
                    WEBSITE
                  </a>
                </p>
                <p className="NavBtn">
                  <a
                    className="NavLink"
                    href="https://www.linkedin.com/company/girmantech/"
                    rel="noreferrer"
                    target="_blank"
                    onClick={MenuBtn}
                  >
                    LINKEDIN
                  </a>
                </p>
                <p className="NavBtn">
                  <Link
                    className="NavLink"
                    onClick={(e) => {
                      window.location.href = `mailto:contact@girmantech.com`;
                      e.preventDefault();
                      MenuBtn();
                    }}
                  >
                    CONTACT
                  </Link>
                </p>
              </div>
            ) : (
              ""
            )}

            <div className="Menu">
              <img src={NavIcon} alt="Menu" id="Menu" onClick={MenuBtn} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
