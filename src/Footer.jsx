import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-left">

          <h5>Connect</h5>

          <ul>
            <li>GET IN TOUCH</li>
            <li>INSTAGRAM</li>
            <li>LINKEDIN</li>
            <li>TWITTER</li>
            <li>YOUTUBE</li>
          </ul>

        </div>

        {/* CENTER */}

        <div className="footer-center">

          <div className="footer-nav">

            <h3>HOME</h3>
            <h3>WORK</h3>
            <h3>ABOUT</h3>
            <h3>SERVICES</h3>

          </div>

          <img
            className="footer-logo-bg"
            src="https://ritzmediaworld.com/wp-content/uploads/2024/09/RMW-Logo.png"
            alt=""
          />

          <div className="footer-partners">

            <img
              src="https://ritzmediaworld.com/wp-content/uploads/2024/09/INS.png"
              alt=""
            />

            <img
              src="https://ritzmediaworld.com/wp-content/uploads/2024/09/meta.png"
              alt=""
            />

            <img
              src="https://ritzmediaworld.com/wp-content/uploads/2024/09/google.png"
              alt=""
            />

            <img
              src="https://ritzmediaworld.com/wp-content/uploads/2024/09/meit.png"
              alt=""
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="footer-right">

          <h5>Email</h5>

          <p>info@ritzmediaworld.com</p>

          <h5>Phone No.</h5>

          <p>+91 9220516777</p>

          <p>+91 9729002168</p>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <h1>RITZ</h1>

        <div className="footer-links">

          <span>DIGITAL MARKETING</span>

          <span>•</span>

          <span>CONTENT MARKETING</span>

          <span>•</span>

          <span>INFLUENCER MARKETING</span>

          <span>•</span>

          <span>WEB DEVELOPMENT</span>

          <span>•</span>

          <span>CREATIVE SERVICES</span>

          <span>•</span>

          <span>PRINT ADVERTISEMENT</span>

        </div>

        <h1>MEDIAWORLD</h1>

      </div>

      <p className="copyright">
        © 2026 Ritz Media World. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;