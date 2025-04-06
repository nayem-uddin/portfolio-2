import image from "../assets/workspace.png";
export default function Cover() {
  return (
    <div className="cover">
      <div className="row">
        <div className="col">
          <div className="welcome">
            <h1 className="fw-bold heading">Welcome to my Portfolio.</h1>

            <p className="text-white-50 lead">
              I am Nayem, a passionate web developer and learner.
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
