import React from "react";
import "./Dialog.css";
import Close from "../../Images/close.png";
import UserProfile from "../../Images/UserProfile.png";

function Modal({ setOpenModal, modelDataset }) {
  const { first_name, last_name, city, contact_number } = modelDataset;
  return (
    <div className="modalBackground">
      <div className="modalContainer rounded-lg p-6 gy-4">
        <div className="title">
          <div className="flex justify-between items-center">
            <p className="MainTitle flex justify-center items-center mt-0">
              Fetch Details
            </p>
            <img
              className="DailogX"
              src={Close}
              alt="Close"
              onClick={() => {
                setOpenModal(false);
              }}
            />
          </div>
          <p className="SecondaryTitle mt-2">
            Here are the details of following employee
          </p>
        </div>
        <div className="UserData mt-5">
          <p className="UserData_Name mt-1">
            Name: {first_name} {last_name}
          </p>
          <p className="UserData_location mt-1">Location: {city}</p>
          <p className="UserData_contact mt-1">
            Contact Number: {contact_number}
          </p>
          <p className="UserData_ProfileImg mt-5">Profile Image:</p>
        </div>
        <div>
          <img
            className="UserProfileImage mt-2"
            src={UserProfile}
            alt="Profile_image"
          />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="cancelBtn rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
