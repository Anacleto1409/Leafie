import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Artworks() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const setForm = async (e) => {
    e.preventDefault();
    if (
      confirm(
        `Are you sure you want to reserve the artwork with code: ${code}?`
      ) == true
    ) {
      const answer = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          code: code,
        }),
      });

      console.log("answer", answer);
      if (answer.status == 200) {
        alert(`Artwork Code ${code} reservation completed successfully!`);
      } else {
        alert(
          `Your reservation was not completed. Please contact us directly.`
        );
      }

      setName("");
      setEmail("");
      setCode("");
    }
  };

  return (
    <div className={styles.main}>
      <div><h1>Fábio's Artworks</h1></div>
      <div><h3>Scroll Down to Make a Reservation</h3></div>
      <div><hr></hr></div>

      <div className={styles.body}>

        <div className={styles.artWork}>
          <h3>Sofa Brass Red</h3>
          <img src="/img/1.png" className={styles.thumbnail} />
          <p>
            Price: 20000€ <br />
            Code: 8r4ss
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Lampshade Cap Purple and White</h3>
          <img src="/img/2.png" className={styles.thumbnail} />
          <p>
            Price: 5000€ <br />
            Code: pl4mp
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Amrchair Single Tennis Balls</h3>
          <img src="/img/3.png" className={styles.thumbnail} />
          <p>
            Price: 1000€ <br />
            Code: t3nn1s
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Vinyl Chair</h3>
          <img src="/img/4.png" className={styles.thumbnail} />
          <p>
            Price: 3000€ <br />
            Code: v1ny1ch
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Can Table Chair</h3>
          <img src="/img/5.png" className={styles.thumbnail} />
          <p>
            Price: 35000€ <br />
            Code: c4nt4bl3
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Cardboard Sofa</h3>
          <img src="/img/6.png" className={styles.thumbnail} />
          <p>
            Price: 45000€ <br />
            Code: c4rds0f4
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Grass Bottle Mini Table</h3>
          <img src="/img/7.png" className={styles.thumbnail} />
          <p>
            Price: 7000€ <br />
            Code: gr455b0tt1e
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Drunk Table Wine</h3>
          <img src="/img/8.png" className={styles.thumbnail} />
          <p>
            Price: 12000€ <br />
            Code: dr8nkt4ble
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Cork Armchair</h3>
          <img src="/img/9.png" className={styles.thumbnail} />
          <p>
            Price: 20000€ <br />
            Code: c0rkch41r
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Lampshade Colourful Metallic Caps</h3>
          <img src="/img/10.png" className={styles.thumbnail} />
          <p>
            Price: 25000€ <br />
            Code: m3t4ll1c4ps
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Cap Basket</h3>
          <img src="/img/11.png" className={styles.thumbnail} />
          <p>
            Price: 17000€ <br />
            Code: c4pb4sk37
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Metallic Can Mirror</h3>
          <img src="/img/12.png" className={styles.thumbnail} />
          <p>
            Price: 6500€ <br />
            Code: c4nm1rr0r
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Metallic Bowl</h3>
          <img src="/img/13.png" className={styles.thumbnail} />
          <p>
            Price: 5000€ <br />
            Code: m3t41b0wl
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Barrel Rustic Cradle</h3>
          <img src="/img/14.png" className={styles.thumbnail} />
          <p>
            Price: 35000€ <br />
            Code: m3t4lcr4dl3
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Modern Book Sofa</h3>
          <img src="/img/15.png" className={styles.thumbnail} />
          <p>
            Price: 22000€ <br />
            Code: b00ks0f4
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Chair & Table Set</h3>
          <img src="/img/16.png" className={styles.thumbnail} />
          <p>
            Price: 50000€ <br />
            Code: t4bl3ch41rs3t
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Balcony Set</h3>
          <img src="/img/17.png" className={styles.thumbnail} />
          <p>
            Price: 15000€ <br />
            Code: b4lc0ny
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Pipe Coffee Table</h3>
          <img src="/img/18.png" className={styles.thumbnail} />
          <p>
            Price: 8000€ <br />
            Code: p1p3c0ff33
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Ring Chandelier</h3>
          <img src="/img/19.png" className={styles.thumbnail} />
          <p>
            Price: 3000€ <br />
            Code: r1n6ch4nd
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Colourful Cap Mirror</h3>
          <img src="/img/20.png" className={styles.thumbnail} />
          <p>
            Price: 7000€ <br />
            Code: c0l0urc4pm1r
          </p>
        </div>
        <div className={styles.artWork}>
          <h3>Pallet Bed</h3>
          <img src="/img/21.png" className={styles.thumbnail} />
          <p>
            Price: 50000€ <br />
            Code: p4ll3tb3d
          </p>
        </div>
      </div>

      <div className={styles.reservationForm}>
        <hr />
        <h3>
          If you want to reserve one of these art pieces for yourself, you can!{" "}
          <br />
          All you have to do is fill this small form!
        </h3>
        <form onSubmit={setForm}>
          <input
            className={styles.input}
            required
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className={styles.input}
            required
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className={styles.input}
            required
            placeholder="Art Code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <br />
          <input
            className={styles.submitButton}
            type={"submit"}
            value={"Submit"}
          />
        </form>
      </div>
    </div>
  );
}
