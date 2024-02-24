import React from "react";
import NavBar from "../NavBar/NavBar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div id="algn">
        <div id="card">
          <div id="upper-bg">
            <img src="./profile.png" alt="profile-pic" class="profile-pic" />
          </div>
          <div id="lower-bg">
            <div class="text">
              <p class="name">Rahul Singh</p>
              <p class="title">
                Web developer & <br /> Java Developer
              </p>
            </div>
            <div id="icons">
              <a href="#" class="ico">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/gmail-new.png"
                  alt="gmail-new"
                />
              </a>
              <a href="#" class="ico">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/github.png"
                  alt="github"
                />
              </a>
              <a href="#" class="ico">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="#" class="ico">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/facebook-new.png"
                  alt="facebook-new"
                />
              </a>
            </div>
            <div id="btn">
              <a href="https://github.com/Rahul-Dev24/Myntra-clone-ReactJs.git">
              <button class="msg">Get More</button></a>
              <button class="msg">Message</button>
            </div>
            <div id="l-c-s">
              <div class="num">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency-systems-regular/48/facebook-like--v1.png"
                  alt="facebook-like--v1"
                />
                <span>35k</span>
              </div>
              <div class="num dvr"></div>
              <div class="num">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency-systems-regular/48/speech-bubble--v1.png"
                  alt="speech-bubble--v1"
                />
                <span>20k</span>
              </div>
              <div class="num dvr"></div>
              <div class="num">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/pulsar-line/48/share.png"
                  alt="share"
                />
                <span>15k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
