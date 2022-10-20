import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Admin() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [reservations, setReservations] = useState([]);
  
  const handleClick = () => {

    if(input !== "fabio"){
      setInput("");
      return;
    }

    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    // Update the document title using the browser API
    fetch("/api/reserve", options)
      .then((res) => res.json())
      .then((result) => setReservations(result.reservations))
      .catch((err) => console.error(err));
    
    setCode(input);
  }
  
  return (
    <div>
      {code === "fabio" ? (
        <div className={styles.mainIndex}>
          <h1>Admin Page</h1>
          <p>Reserved Items:</p>
          <div className={styles.reservationList} style={{padding: "10px"}}>
          {reservations ? reservations.map((el, index) => {
          return (
            <div className={styles.reservationBox} key={index}>
              Reserved by: <br />
              {el.name} <br />
              <a style={{color: "#E5F6DF"}} href={`mailto:${el.email}?subject=Fabio Giordano - Artwork Code: ${el.code}`}>{el.email}</a> <br />
              <hr />
              
              <b>Code: {el.code}</b>
            </div>
          );
        }) : ""}</div>
        </div>
      ) : (
        <div className={styles.mainIndex}>
          <br />
          <p>Enter Artist Backoffice Code</p>
          <div className="inputBox">
            <input
              className={styles.input}
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <br />
            <button className={styles.submitButton} onClick={handleClick}>Log In</button>
          </div>
        </div>
      )}
    </div>
  );
}
