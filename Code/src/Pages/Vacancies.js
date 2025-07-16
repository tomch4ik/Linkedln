import './Vacancies.css'


export function Vacancies() {
  return (
    <div className="central-container2">
      <div className="section2">
        <h3 className="section-title2">Selection of the best vacancies</h3>
        <p className="subtitle22">
          Based on your profile, settings and activity, such as applications submitted, searches and saves
        </p>
        <JobCard
          logoPath="./Vacancies_img/Company_logo1.png"
          location="Walmart - Denison, AL"
          salary="14$/year - 22$/year"
        />
        <JobCard
          logoPath="./Vacancies_img/Company_logo2.png"
          location="Walmart - Las Vegas, NM"
          salary="15$/year - 21$/year"
        />
        <JobCard
          logoPath="./Vacancies_img/Company_logo3.png"
          location="Varsity Tutors, a Nardy Company United States (Remote)"
          salary="20$/year - 28$/year"
        />
        <a href="#" className="show-all2">Show all</a>
      </div>

      <div className="section2">
        <h4 className="section-subtitle2">Recommended job search queries</h4>
        <div className="tags2">
          {['marketing manager', 'hr', 'legal', 'sales', 'google', 'analyst', 'amazon'].map((tag, i) => (
            <button key={i} className="tag-btn2">
              <svg className="tag-icon2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 21L15.8 15.8M17 10.5C17 14.0899 14.0899 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5Z"
                  stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="section2">
        <h4 className="section-subtitle2">Graphic designer</h4>
        <p className="subtitle22">Casas Adobes, Arizona, United States (within 25 miles)</p>
        <JobCard
          logoPath="./Vacancies_img/Company_logo4.png"
          company="Dribbble"
          location="Dribbble • United States (Remote)"
          hideMeta={true}
        />
        <JobCard
          logoPath="./Vacancies_img/Company_logo5.png"
          company="Freshworks"
          location="Freshworks • Florianópolis, Santa Catarina, Brazil (Remote)"
          hideMeta={true}
        />
        <a href="#" className="show-all2">Show all</a>
      </div>
    </div>
  );
}

function JobCard({ logoPath, company, location, salary, hideMeta, showHrAfter }) {
  return (
    <>
      <div className="job-card2">
        <div className="logo-and-info2">
          {logoPath && <img src={logoPath} alt={`${company} logo`} className="company-logo2" />}
          <div className="job-info2">
            <p className="subtitle2">{location}</p>
            {salary && <p className="salary2">{salary}</p>}
            {!hideMeta && (
              <p className="meta2">
                2 weeks ago – <a href="#">Be among the candidates</a>
              </p>
            )}
          </div>
        </div>
        <button className="close-btn2">
          <svg className="close-icon2" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M6 18L18 6" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  );
}
