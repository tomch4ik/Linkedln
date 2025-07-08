import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="main-wrapper">
      <div className="card">
        <div className="card-top">
          <div className="banner">
            <div className="camera">
              <img src="./2.png" alt="camera" />
            </div>
          </div>
          <div className="profile-img">
            <img src="./1.jpg" alt="profile" />
          </div>
          <div className="karandash">
            <img src="./3.png" alt="edit" />
          </div>
          <div className="card-body">
            <div className="user-info">
              <h2>Nathaniel Evans</h2>
              <p className="job-title">Junior UI/UX Designer • Microsoft</p>
              <p className="location">Klamath Falls, Oregon, USA</p>
              <a href="#" className="profile-link">
                Change your custom portfolio link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="main-grid-item-icon"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  style={{ marginLeft: "6px", verticalAlign: "middle" }}
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              <a href="#" className="edit-contact">Edit contact information</a>
              <div className="btn-group">
                <button className="open-btn">Open to</button>
                <button className="add-btn">Add profile section</button>
                <button className="more-btn">More</button>
                <div className="badge">
                  <img src="./4.png" alt="badge" />
                  <span>UCLA (Design Media Arts)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
        <div className="analytics">
          <h3>Analytics</h3>
<p className="private">
  <img src="./5.png"  className="eye-icon" />
  Only you can see this
</p>
          <div className="stats">
            <div className="stat">
              <img src="./users.png"  />
              <div>
                <p className="count purple">73 profile views</p>
                <p className="desc">To attract viewers, update your profile</p>
              </div>
            </div>
            <div className="stat">
              <img src="./6.png"/>
              <div>
                <p className="count purple">128 post views</p>
                <p className="desc">To attract more followers, start a post</p>
              </div>
            </div>
          </div>
          <div className="analytics-button-wrapper">
  <button className="show-analytics">
    <span className="btn-text">Show all analytics</span>
    <img src="./7.png" className="arrow-icon" alt="arrow" />
  </button>
</div>

        </div>
      </div>
  );
}

export default Card;
