import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="body">
      <div className="header">
        <form>
          <button type="button">
            <a>
              <img className="btn-header" src="/menu1.png" />
            </a>
          </button>
          <input placeholder="Telusiri dalam email" />
          <Link href="akun">
            <a>
              <img className="profile-header" src="/profile.png" />
            </a>
          </Link>
        </form>
      </div>

      <div className="main">
        <h5>Utama</h5>
        {/* <div className="wrapping-message">
          <div>
            <img className="profile-main" src="/profile.png" />
          </div>
          <div className="description-main">
            <h2>Social</h2>
            <p>Instagram,Facebo... </p>
          </div>
          <div> </div>
        </div> */}
        <div className="wrapping-message">
          <div>
            <img className="profile-main" src="/profile.png" />
          </div>
          <div className="description-main">
            <h2>
              Alex<h6>22 Sep</h6>
            </h2>
            <p>
              Hallo apa kabar alex? apa kah kamu berada di...{" "}
              <img className="btn-header" src="/star.png" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;