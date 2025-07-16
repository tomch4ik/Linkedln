
import React, { useState } from "react";
import AddExperience from "../Modals/AddExperience";
import "./MyProfilePortfolio.css";

export function MyProfilePortfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  const handlePhotoClick = (e) => {
    if (e.target.className === 'overlay') {
      setShowFullImage(false);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="card1">
        <div className="card1-top">
          <div className="banner">
            <div className="camera">
              <img src="./MyProfilePortfolio_img/2.png" alt="camera" />
            </div>
          </div>
          <div className="profile-img">
            <img src="./MyProfilePortfolio_img/1.jpg" alt="profile" />
          </div>
          <div className="karandash">
            <img src="./MyProfilePortfolio_img/3.png" alt="edit" />
          </div>
          <div className="card1-body">
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
                  <img src="./MyProfilePortfolio_img/4.png" alt="badge" />
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
          <img src="./MyProfilePortfolio_img/5.png" className="eye-icon" />
          Only you can see this
        </p>
        <div className="stats">
          <div className="stat">
            <img src="./MyProfilePortfolio_img/users.png" />
            <div>
              <p className="count purple">73 profile views</p>
              <p className="desc">To attract viewers, update your profile</p>
            </div>
          </div>
          <div className="stat">
            <img src="./MyProfilePortfolio_img/6.png" />
            <div>
              <p className="count purple">128 post views</p>
              <p className="desc">To attract more followers, start a post</p>
            </div>
          </div>
        </div>
        <div className="analytics-button-wrapper">
          <button  className="show-analytics" onClick={() => setShowFullImage(true)}>
              Show all analytics
            <img src="./MyProfilePortfolio_img/7.png" className="arrow-icon" alt="arrow" />
          </button>
        </div>
        {showFullImage && (
        <div className="overlay" onClick={handlePhotoClick}>
          <img src="./MyProfilePortfolio_img/Analitic.jpg" className="modal-image" />
        </div>
        )}
      </div>

      <div className="experience-box">
        <div className="experience-header">
          <h3>Experience</h3>
          <p>Show everyone your achievement and get twice as many profile and contact information views</p>
          <button className="close-btn">
            <img src="./MyProfilePortfolio_img/Close.png" alt="close" className="close-icon" />
          </button>
        </div>

        <div className="experience-item">
          <img src="./MyProfilePortfolio_img/Position.png" alt="icon" className="experience-icon" />
          <div className="experience-info">
            <p className="position-title">Position</p>
            <p className="org-name">Organization</p>
            <p className="duration">2012 – now</p>
          </div>
        </div>

        <button className="add-experience-btn" onClick={() => setModalOpen(true)}>
          Add experience
        </button>

        <AddExperience isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>

      <div className="education-box">
        <div className="education-header">
          <h3>Education</h3>
          <div className="education-icons">
            <img src="./MyProfilePortfolio_img/Plus.png" alt="Add" />
            <img src="./MyProfilePortfolio_img/edit.png" alt="Edit" />
          </div>
        </div>

        <div className="education-content">
          <img src="./MyProfilePortfolio_img/image.png" alt="UCLA" className="education-logo" />
          <div className="education-details">
            <p className="edu-name"><strong>University of California, Los Angeles (UCLA)</strong></p>
            <p className="edu-years">2014–2018</p>
          </div>
        </div>
      </div>

      <div className="skills-box">
        <div className="skills-header">
          <div>
            <h3>Skills</h3>
            <p className="skills-desc">
              Communicate your readiness for new opportunities – 50% of employers use skills data to fill their positions
            </p>
          </div>
          <button className="close-btn">
            <img src="./MyProfilePortfolio_img/Close.png" alt="close" />
          </button>
        </div>

        <div className="skills-list">
          <p className="skill-title">Communication skills</p>
          <hr />
          <p className="skill-title2">Technical skills</p>
        </div>

        <button className="add-skills-btn">Add skills</button>
      </div>
    </div>
  );
}


























