export default function NavLink({ link, text }) {
  return (
    <div className="nav-item">
      <a className="nav-link" href={link}>
        <span className="text-light fs-5 fw-bold">{text}</span>
      </a>
    </div>
  );
}
