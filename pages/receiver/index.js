import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Receiver from "@components/Receiver/index";
import styles from "./styles.module.css";

const sampleReceiversData = [
  {
    profilePicture: "path-to-profile-picture-1.jpg",
    Name: "Receiver One",
    Email: "receiver1@example.com",
  },
  {
    profilePicture: "path-to-profile-picture-2.jpg",
    Name: "Receiver Two",
    Email: "receiver2@example.com",
  },
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [newReceiver, setNewReceiver] = useState({
    Name: "",
    Email: "",
  });

  const handlePlusClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setNewReceiver({ Name: "", Email: "" });
  };

  const handleInputChange = (field, value) => {
    setNewReceiver({ ...newReceiver, [field]: value });
  };

  const handleAddReceiver = () => {
    if (newReceiver.Name && newReceiver.Email) {
      sampleReceiversData.unshift({ ...newReceiver });
      handlePopupClose();
      console.log(sampleReceiversData);
    }
  };

  return (
    <div>
      <FaPlusCircle
        size={50}
        className={styles.plusCircle}
        onClick={handlePlusClick}
      />
      <h1>List out your receivers here</h1>
      <div className={styles.container}>
        {sampleReceiversData.map((receiver, index) => (
          <Receiver key={index} receiver={receiver} />
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
                  type={field === "Email" ? "email" : "text"}
                  value={newReceiver[field]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className={styles.input}
                />
              </div>
            ))}

            <button onClick={handleAddReceiver} className={styles.addButton}>
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
