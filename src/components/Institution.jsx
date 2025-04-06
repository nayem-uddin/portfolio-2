export const Institution = ({ logo, name, degree, result }) => {
  return (
    <div className="inst-container mt-3 container-fluid">
      <div className="logo me-2">
        <img src={logo} alt="" className="figure-img" />
      </div>
      <div className="info">
        <p className="fw-bold name">{degree}</p>
        <p>Institution: {name}</p>
        <p>{result}</p>
      </div>
    </div>
  );
};
