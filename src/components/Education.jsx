import uni from "../assets/institutions/uni-logo.png";
import college from "../assets/institutions/college-logo.png";
import school from "../assets/institutions/school-logo.webp";
import { Institution } from "./Institution";
import { Heading } from "./Heading";

export const Education = () => {
  return (
    <div className="mt-5" id="education">
      <Heading headline={"Education"} />
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <Institution
              logo={uni}
              name={"Khulna University of Engineering & Technology"}
              degree={"B.Sc. in Mechatronics Engineering"}
              result={"CGPA: 3.16/4.00"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <Institution
              logo={college}
              name={"Government Science College"}
              degree={"Higher Secondary Certificate"}
              result={"GPA: 4.58/5.00"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <Institution
              logo={school}
              name={"A.K. School and College"}
              degree={"Secondary School Certificate"}
              result={"GPA: 5.00/5.00"}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
