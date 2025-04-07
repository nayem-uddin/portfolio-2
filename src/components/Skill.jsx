export const Skill = ({ logo, name }) => {
  return (
    <div className="ms-3">
      <div className="card skill">
        <div className="skill-logo text-center">
          <img src={logo} alt={name} />
        </div>

        <div className="card-body text-center">
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};
