import React from "react";
import { Link } from "react-router-dom";
import profilepic from "../assets/profilepic.jpg";
import "../styles/ProfilePage.css";
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import tiktok from "../assets/tiktok.png"

const ProfilePage = () => {
  return (
    <div className="profile__page">
      <div className="profile__section">
        <div className="profile__section--image">
          <img src={profilepic} alt="" className="profile__image"/>
        </div>
        <div className="profile__section--social-links">
          <a className="social-link" href="https://twitter.com" target="_blank">
            <img src={twitter} alt="" />
          </a>
          <a className="social-link" href="https://facebook.com" target="_blank">
            <img src={facebook} alt="" />
          </a>
          <a className="social-link" href="https://instagram.com" target="_blank">
            <img src={instagram} alt="" />
          </a>
          <a className="social-link" href="https://tiktok.com" target="_blank">
            <img src={tiktok} alt="" />
          </a>
        </div>
      </div>
      <div className="other-links__section">
        <div className="other__links--wrapper">
          <div className="other-link">
            <a
              className="link__title"
              href="https://animeworld-fb434.web.app/"
              target="_blank"
            >
              AnimeWorld
            </a>
            <div className="link__preview--wrapper">
              <iframe
                className="link__preview"
                src="https://animeworld-fb434.web.app/"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <div className="other-link">
            <a
              className="link__title"
              href="https://intenrship-nft.web.app/"
              target="_blank"
            >
              UltaVerse NFT WORLD
            </a>
            <div className="link__preview--wrapper">
              <iframe
                className="link__preview"
                src="https://intenrship-nft.web.app/"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <div className="other-link">
            <a
              className="link__title"
              href="library-react-nine.vercel.app"
              target="_blank"
            >
              Library
            </a>
            <div className="link__preview--wrapper">
              <iframe
                className="link__preview"
                src="https://library-react-nine.vercel.app"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <div className="other-link">
            <a
              className="link__title"
              href="https://twitter-clone-45770.web.app/"
              target="_blank"
            >
              Twitter Clone
            </a>
            <div className="link__preview--wrapper">
              <iframe
                className="link__preview"
                src="https://twitter-clone-45770.web.app/"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
