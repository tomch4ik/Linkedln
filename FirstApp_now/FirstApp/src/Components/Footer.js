import './Footer.css'

export function Footer({shadow = false}){
    const footer = shadow ? "footer footer-shadow" : "footer" ;
    return(
        <footer className={footer}>
            <div className='footer_info'>
                <ul className="footer_column">
                    <li>General information</li>
                    <li>Careers</li>
                    <li>Ad Settings</li>
                    <li>Security Center</li>
                </ul>
                <ul className="footer_column">
                    <li>Accessibility</li>
                    <li>Privacy and Terms</li>
                    <li>Mobile Phone</li>
                </ul>
                <ul className="footer_column">
                    <li>Policies for the Professional Community</li>
                    <li>Sales Solutions</li>
                    <li>Advertising Solutions</li>
                </ul>
            </div>

            <div className='footer_settings'>
                <div className='footer_set'>
                    <img src='Footer_img/Question.svg' alt='Question'/>
                    <div className='footer_set_text'>
                        <span><strong>Question?</strong></span>
                        <span>Visit our Help Center.</span>
                    </div>
                </div>
                <div className='footer_set'>
                    <img src='Footer_img/GearSix.svg' alt='GearSix' />
                    <div className='footer_set_text'>
                        <span><strong>Manage Account and Privacy</strong></span>
                        <span>Go to settings.</span>
                    </div>
                </div>
                <div className='footer_set'>
                    <img src='Footer_img/ShieldCheck.svg' alt='ShieldCheck'/>
                    <div className='footer_set_text'>
                        <span><strong>Recommendation Transparency</strong></span>
                        <span>Learn more about recommended content.</span>
                    </div>
                </div>
            </div>

            <form className="footer_form">
                <label htmlFor="language-select">Language:</label>
                <select name="language" id="language-select">
                    <option value="en">English</option>
                    <option value="ua">Українська</option>
                    <option value="es">Español</option>
                </select>
            </form>
        </footer>
    );

}


















