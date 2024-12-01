import React, { useEffect, useState } from "react";
import "./Search.css";
import { userDataApi } from "../../utils/data";
import Card from "../Card/Card";
import Modal from "../DialogBox/Dialog";
import { useDispatch, useSelector } from "react-redux";
import UserNotFound from "../../Images/NoResultFound.png";
import SearchIcon from "@mui/icons-material/Search";
import { addsearchInput } from "../../utils/cartSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [UserData, setUserData] = useState(userDataApi);
  const [modalOpen, setModalOpen] = useState(false);
  const [modelDataset, setModelDataset] = useState();
  const [SearchInput, SetSearchInput] = useState("");

  const searchIpt = useSelector((store) => {
    return store.cart.searchInput;
  });

  const modelData = (val) => {
    setModelDataset(val);
  };

  let DataLen = UserData.length;

  useEffect(() => {
    SetSearchInput(searchIpt);
    if (searchIpt) {
      let ftrData = userDataApi.filter((val) => {
        const { first_name, last_name, city, contact_number } = val;
        let name = first_name + " " + last_name;
        let SearchByName = name.toLowerCase().includes(searchIpt.toLowerCase());
        let SearchByCity = city.toLowerCase().includes(searchIpt.toLowerCase());
        let SearchByNum = contact_number.includes(searchIpt);
        return SearchByName || SearchByCity || SearchByNum;
      });
      setUserData(ftrData);
    } else {
      setUserData(userDataApi);
    }
  }, [searchIpt]);

  const handleSubmit = () => {
    dispatch(addsearchInput(SearchInput));
    // SetSearchInput("");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={DataLen < 6 ? "SearchMainDiv" : ""}>
      <div className="SearchDiv flex flex-col items-center">
        <div className="SearchBar">
          <SearchIcon
            className="SearchIcon cursor-pointer"
            onClick={handleSubmit}
          />
          <input
            className="SearchBar2"
            placeholder="Search"
            type="text"
            value={SearchInput}
            onChange={(e) => SetSearchInput(e.target.value)}
            onKeyDown={handleEnterKey}
          />
        </div>
        <div>
          {DataLen !== 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {UserData.map((val) => {
                return (
                  <Card
                    data={val}
                    key={val.contact_number}
                    modelData={modelData}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                  />
                );
              })}
            </div>
          ) : (
            <div>
              <img
                className="UserNotFound"
                src={UserNotFound}
                alt="User Not Found"
              />
            </div>
          )}
        </div>
      </div>
      {modalOpen ? (
        <Modal setOpenModal={setModalOpen} modelDataset={modelDataset} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
