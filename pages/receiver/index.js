import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Receiver from "@components/Receiver/index";

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
        style={{ marginBottom: "10px", cursor: "pointer" }}
        onClick={handlePlusClick}
      />
      <h1>List out your receivers here</h1>
      <div style={{ display: "flex" }}>
        {sampleFriendsData.map((friend, index) => (
          <Receiver key={index} friend={friend} />
        ))}
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "80%",
          }}>
          <h2 style={{ marginBottom: "20px", textAlign: "left" }}>
            Add a New Friend
          </h2>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              textAlign: "left",
            }}>
            Nick Name:
          </label>
          <input
            type="text"
            value={newFriend.nickName}
            onChange={(e) =>
              setNewFriend({ ...newFriend, nickName: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              textAlign: "left",
            }}>
            Name:
          </label>
          <input
            type="text"
            value={newFriend.name}
            onChange={(e) =>
              setNewFriend({ ...newFriend, name: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              textAlign: "left",
            }}>
            Email:
          </label>
          <input
            type="email"
            value={newFriend.email}
            onChange={(e) =>
              setNewFriend({ ...newFriend, email: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <div style={{ textAlign: "left" }}>
            <button
              onClick={handleAddFriend}
              style={{
                background: "#4caf50",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                marginRight: "10px",
              }}>
              Add Friend
            </button>
            <button
              onClick={handlePopupClose}
              style={{
                background: "#f44336",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
              }}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
