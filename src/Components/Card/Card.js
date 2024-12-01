import React from "react";
import "./Card.css";
import UserImage from "../../Images/UserImage.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

const Card = ({ data, modelData, modalOpen, setModalOpen }) => {
  const { first_name, last_name, city, contact_number } = data;

  const fetchDataBtn = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
    modelData(data);
  };

  return (
    <div className="UserCard">
      <div>
        <div className="CardImg">
          <img className="userImage" src={UserImage} alt="User_Image" />
        </div>
        <div className="CardInfo">
          <p className="userName">
            {first_name} {last_name}
          </p>
          <span className="userLocaion">
            <LocationOnIcon className="LocationIcon mr-1" />
            <span>{city}</span>
          </span>

          <div className="flex justify-between items-center mt-5">
            <div>
              <div className="userContact flex">
                <CallIcon className="contactIcon mr-1" />
                <p className="ContactNum">{contact_number}</p>
              </div>
              <p className="AvPhone">Available on phone</p>
            </div>
            <button className="fetchDataBtn" onClick={fetchDataBtn}>
              Fetch Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
