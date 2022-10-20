import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function MenuSobre() {
  return (
    <div className={styles.mainAbout}>
      <h1>About Me</h1>
      <img className="creatorsPic" src="/img/homem.png" style={{ width: "800px" }} />

      <p>My name is Fábio Giordano and I created my brand because I believe that we would all live better if everyone recycled what they don't use so that the world would be better for the next generations.</p><p>To achieve my goal, I have partnered with the Portuguese marine litter association, the association removes rubbish from the sea and delivers it so that it can be used by me to create unique and sustainable works of art.</p> <p> More recently I have partnered with World Wide Fund for Nature which works in the field of wilderness preservation and reducing human impact on the environment.</p>
      I hope you enjoy the artwork.  



      
    </div>
  );
}
