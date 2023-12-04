// pages/index.js
import { useState } from "react";
import styles from "./Card.module.css";
import { FaCirclePlus } from "react-icons/fa6";

const sampleData = [
  {
    name: "ABC",
    email: "abc@gmail.com",
    title: "1",
  },
];

export default function Card2() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [cards, setCards] = useState([]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const addCard = () => {
    if (name && email && title) {
      // Create a new card object
      const newCard = { name, email, title };

      // Update the cards state
      //setCards([...cards, newCard]);
      sampleData.unshift({ ...newCard });
      // Clear the input fields
      setName("");
      setEmail("");
      setTitle("");

      // Close the popup
      closePopup();
    } else {
      alert("Please fill in all fields.");
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <FaCirclePlus
        className={styles.icon}
        size={40}
        opacity={isHovered ? 1 : 0.5}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openPopup}
      />
      <div className={styles.container}>
        {sampleData.map((card, index) => (
          <div className={styles.cardContainer}>
            <div key={index} className={styles.card}></div>
            <h3>{card.title}</h3>
            <p>Name: {card.name}</p>
            <p>Email: {card.email}</p>
          </div>
        ))}

        {isPopupOpen && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <label htmlFor="name" className={styles.label1}>
                Receiver's name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Receiver's email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="title">Letter's Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button onClick={addCard} className={styles.button1}>
                Add Card
              </button>
              <button onClick={closePopup} className={styles.button2}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
