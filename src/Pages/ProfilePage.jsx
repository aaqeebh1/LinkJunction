import React from 'react';
import { Link } from 'react-router-dom';
import profilepic from "../assets/profilepic.jpg"
import "../styles/ProfilePage.css"

const ProfilePage = () => {
    return (
      <div>
        <div className="profile__section">
          <div className="profile__section--image">
            <img src={profilepic} alt="" />
          </div>
          <div className="profile__section--social-links">
            <p>Twitter</p>
            <p>FaceBook</p>
            <p>Instagram</p>
            <p>TicTok</p>
          </div>
        </div>
        <div className="other-links__section">
          <div className="other-link">
            <a className='other-link__title' href="https://animeworld-fb434.web.app/" target="_blank">AnimeWorld</a>
            <iframe
              className="link__preview"
              src="https://animeworld-fb434.web.app/"
                        frameborder="0"
                        scrolling='no'
            ></iframe>
          </div>
          <div className="other-link">
            <div className="link__title"></div>
            <div className="link__preview"></div>
          </div>
          <div className="other-link">
            <div className="link__title"></div>
            <div className="link__preview"></div>
          </div>
          <div className="other-link">
            <div className="link__title"></div>
            <div className="link__preview"></div>
          </div>
        </div>
      </div>
    );
}

export default ProfilePage;
