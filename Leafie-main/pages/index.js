import styles from "../styles/Home.module.css";
import ResponsiveCarousel from "./responsiveCarousel";

export default function Home() {
  return (
    <div className={styles.mainIndex}>
      <div className="homeTitle">
        <img src="/logo/logo.png" />
      </div>
      <div className={styles.homeExpo}>
        <h1>About the Exhibition</h1>
        <p>
          It is with this belief in mind that we decided to team up with Fábio
          Giordano, a renowned Italian artist whose passion is the search for
          the redefinition of things that, initially, had no more value,
          transforming them into a whole new universe!
        </p>
        <p>
          Fábio uses PET bottles, marine waste, glass, among others; and uses
          them to create totally stylish, innovative and, of course, exclusive
          furniture and decoration objects, currently having more than 500
          examples in his arsenal.
        </p>
        <p>
          For so much furniture and so much creativity, Fábio decided to launch
          an art exhibition where he would have the chance to sell his copies!
        </p>
        <p>
          Through this, he intends to make people aware to activate the
          perspective that it is possible to create something new from the old,
          which would bring the chance to reduce the excessive production of
          waste and exacerbated consumerism.
        </p>
      </div>
      <br />
      <div className={styles.homeProducts}>
        <center>
          <ResponsiveCarousel />
        </center>
      </div>
      <br />
      <div className="mainPartners">
        <h3>Partners</h3>
        <img src="/partners/partners.png" />
      </div>
    </div>
  );
}
