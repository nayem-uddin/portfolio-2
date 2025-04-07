import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top nav-design">
        <div className="container-fluid">
          <div class="navbar-brand"></div>
          {/* to shift the toggle button to the right*/}
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div className="navbar-nav">
              <NavLink link={`#`} text={`Home`} />
              <NavLink link={`#education`} text={`Education`} />
              <NavLink link={`#skills`} text={`Skills`} />
              <NavLink link={`#`} text={`Certificates`} />
              <NavLink link={`#`} text={`Profiles`} />
              <NavLink link={`#`} text={`Projects`} />
              <NavLink link={`#`} text={`Contact`} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
