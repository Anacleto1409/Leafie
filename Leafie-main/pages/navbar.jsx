import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className={styles.mainNav}>
        <img style={{float: "left", width: "200px", marginTop: "-20px"}}  src="/logo/Logo_Fabio_Giordano_White.png" />
      <span className={styles.menu}>
        <Link href="/">
          <a className={styles.titulo}>
          <button
              className={router.asPath === "/" ? styles.activeButton : styles.inactiveButton}
              disabled={router.asPath === "/"}
            >
              Home
            </button>
          </a>
        </Link>
        <Link href="/artworks">
          <a className={styles.titulo}>
            <button
              className={router.asPath === "/artworks" ? styles.activeButton : styles.inactiveButton}
              disabled={router.asPath === "/artworks"}
            >
              Artwork
            </button>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <button
              className={router.asPath === "/about" ? styles.activeButton : styles.inactiveButton}
              disabled={router.asPath === "/about"}
            >
              About Me
            </button>
          </a>
        </Link>
        <Link href="/admin">
          <a>
            <button
              className={router.asPath === "/admin" ? styles.activeButton : styles.inactiveButton}
              disabled={router.asPath === "/admin"}
            >
              Admin
            </button>
          </a>
        </Link>
      </span>
    </div>
  );
}
