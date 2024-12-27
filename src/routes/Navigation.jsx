import "./navigation.css"
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let redirect = useNavigate();

  const handleNavigation = (path) => {
    redirect(path);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-color bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => handleNavigation("/")}>
              Memory Helper
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handleNavigation("/reminders")}
                >
                  Reminders
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handleNavigation("/new-reminder")}
                >
                  Create Reminder
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
