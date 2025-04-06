import image from "../assets/workspace.png";
export default function Cover() {
  return (
    <div className="cover">
      <div className="row">
        <div className="col">
          <div className="welcome">
            <h1 className="fw-bold heading">Welcome to my Portfolio.</h1>

            <p className="text-white-50 lead">
              Thanks for visiting. You will find my details here.
            </p>
          </div>
        </div>
        <div className="col text-center">
          <img src={image} alt="workspace" className="float-end" />
        </div>
      </div>
    </div>
  );
}
