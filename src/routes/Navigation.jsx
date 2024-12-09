const Navigation = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
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
                <a className="nav-link" href={`/`}>
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/reminders`}>
                  Reminders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/new-reminder`}>
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
