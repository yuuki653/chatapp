import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "./config/firebase";
import { signOut } from "firebase/auth";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { AuthContext } from "./AuthService";
import { nanoid } from "nanoid";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    // onSnapshot(collection(db,'messages'),()=>{})
    onSnapshot(collection(db, "messages"), (snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        return doc.data();
      });

      setMessages(messages);
    });
  }, []);

  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "messages"), {
      content: value,
      user: user.displayName,
    });

    setValue("");
  };

  return (
    <>
      <h1>Room</h1>
      <ul>
        {messages.map((message) => (
          <li key={nanoid()}>
            {message.user} : {message.content}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} value={value}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit">送信</button>
      </form>
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Room;
