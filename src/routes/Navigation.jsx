const Navigation = () => {
    return (
      <>
        <div id="sidebar">
            <h1>Navigation menu</h1>
            <nav>
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href={`/`}>Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={`/reminders`}>Reminders</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={`/new-reminder`}>Create Reminder</a>
                </li>
                </ul>
            </nav>
        </div>
      </>
    );
  }
  
export default Navigation;