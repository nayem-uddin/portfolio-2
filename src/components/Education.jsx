import { Institution } from "./Institution";
import { Heading } from "./Heading";

export const Education = () => {
  return (
    <div id="education">
      <Heading headline={"Education"} />
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <Institution
              logo="institutions/uni-logo.png"
              name={"Khulna University of Engineering & Technology"}
              degree={"B.Sc. in Mechatronics Engineering"}
              result={"CGPA: 3.16/4.00"}
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <Institution
              logo="institutions/college-logo.png"
              name={"Government Science College"}
              degree={"Higher Secondary Certificate"}
              result={"GPA: 4.58/5.00"}
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <Institution
              logo="institutions/school-logo.jpg"
              name={"A.K. School and College"}
              degree={"Secondary School Certificate"}
              result={"GPA: 5.00/5.00"}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
