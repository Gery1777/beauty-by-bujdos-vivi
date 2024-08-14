import {
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <>
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#!">About</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Contact</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Terms of Use</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">
                &copy; Your Website 2023. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-4">
                  <a href="#home">
                    <FontAwesomeIcon
                      className="fa-2xl"
                      icon={faFacebook}
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li className="list-inline-item me-4">
                  <a href="#!">
                    <FontAwesomeIcon
                      className="fa-2xl"
                      icon={faTiktok}
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <FontAwesomeIcon
                      className="fa-2xl"
                      icon={faInstagram}
                    ></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
