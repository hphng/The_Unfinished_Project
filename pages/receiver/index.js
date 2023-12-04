import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Receiver from "@components/Receiver/index";
import styles from "./styles.module.css";

const sampleFriendsData = [
  {
    profilePicture: "path-to-profile-picture-1.jpg",
    nickName: "Friend1",
    name: "Friend One",
    email: "friend1@example.com",
  },
  {
    profilePicture: "path-to-profile-picture-2.jpg",
    nickName: "Friend2",
    name: "Friend Two",
    email: "friend2@example.com",
  },
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [newFriend, setNewFriend] = useState({
    nickName: "",
    name: "",
    email: "",
  });

  const handlePlusClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setNewFriend({ nickName: "", name: "", email: "" });
  };

  const handleInputChange = (field, value) => {
    setNewFriend({ ...newFriend, [field]: value });
  };

  const handleAddFriend = () => {
    if (newFriend.nickName && newFriend.name && newFriend.email) {
      sampleFriendsData.unshift({ ...newFriend });
      handlePopupClose();
      console.log(sampleFriendsData);
    }
  };

  return (
    <div>
      <FaPlusCircle
        size={50}
        className="plusCircle"
        onClick={handlePlusClick}
      />
      <h1>List out your receivers here</h1>
      <div className={styles.container}>
        {sampleFriendsData.map((friend, index) => (
          <Receiver key={index} friend={friend} />
        ))}
      </div>

      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2>Add a New Receiver</h2>
            {["Name", "Email"].map((field) => (
              <div key={field}>
                <label>{field}:</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={newFriend[field]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className={styles.input}
                />
              </div>
            ))}

            <button onClick={handleAddFriend} className={styles.addButton}>
              Add Receiver
            </button>
            <button onClick={handlePopupClose} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
