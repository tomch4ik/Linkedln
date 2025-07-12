import './Landing.css';


export function Landing() {
  return (
    <><div className='container container--landing'>
      <div className="landing-container">
        <div className="left-section">
          <h1>Welcome to the community specialists!</h1>
          <button className="google-btn">Login with Google</button>
          <button className="email-btn">login by email address</button>
          <p className="terms">
            By clicking "Continue" to join or sign in,<br />
            you agree to the terms of the LinkedIn User Agreement,<br />
            Privacy Policy, and Cookie Policy.
          </p>
          <p className="join-link">
            Not on LinkedIn? <a href="#">Join</a>
          </p>
        </div>
        <div className="right-section">
          <img src="./Landing_img/illustration.png" alt="Woman with laptop" />
        </div>
      </div>
    </div>
      <div className="vacancy-container">
        <div className='vacancy_main'>
          <div className="vacancy-left">
            <h2>Find a suitable vacancy or internship</h2>
          </div>
          <div className="vacancy-tags">
            {[
              'Engineering',
              'Business development',
              'Finance',
              'Administrative Assistant',
              'Retail employee',
              'Help Desk',
              'Operations',
              'Information Technology',
              'Marketing',
              'Personnel support',
              'Education',
              'Sales',
            ].map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    <div className='container container--landing'>
      <div className="discover-section">
        <div className="top-part">
          <h2>Post your vacancy so millions of people can see it</h2>
          <button className="post-btn">Post a vacancy</button>
        </div>
        <div className="middle-part">
          <div className="left">
            <h3>Discover the best<br />software tools</h3>
            <p>
              Connect with buyers who have<br />
              first-hand experience to find the<br />
              best products for you.
            </p>
          </div>
          <div className="right">
            <div className="tag-middle">E-commerce platforms</div>
            <div className="tag-middle">Recruiting Software</div>
            <div className="tag-middle">Software for CRM systems</div>
            <div className="tag-middle">Social Networking Software</div>
            <div className="tag-middle">HR systems</div>
            <div className="tag-middle">Project Management Software</div>
          </div>
        </div>
        <div className="bottom-part">
          <h2>
            Connect with your colleagues,<br />
            classmates and friends on LinkedIn.
          </h2>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div></>
  );
}