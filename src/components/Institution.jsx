export const Institution = ({ logo, name, degree, result }) => {
  return (
    <div className="inst-container mt-3 container-fluid border">
      <div className="logo me-2">
        <img src={logo} alt="" />
      </div>
      <div className="info mt-3">
        <p className="fw-bold name">{degree}</p>
        <p>Institution: {name}</p>
        <p>{result}</p>
      </div>
    </div>
  );
};
