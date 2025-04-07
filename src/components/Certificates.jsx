import { Heading } from "./Heading";
import { Certificate } from "./Certificate";
export default function Certificates() {
  const photos = [
    "ps-basic.jpg",
    "ps-inter.png",
    "sql-basic.jpg",
    "sql-inter.jpg",
    "mongodb-intro.jpg",
  ];
  const titles = [
    "Problem-solving (Basic)",
    "Problem-solving (Intermediate)",
    "SQL (Basic)",
    "SQL (Intermediate)",
    "Introduction to MongoDB",
  ];
  return (
    <div id="certificates">
      <Heading headline={"Certificates"} />

      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <Certificate
              image="certificates/se-intern.jpg"
              title={`Software Engineering Intern`}
            />
          </div>
          {photos.map((cert, index) => {
            return (
              <div className="carousel-item" data-bs-interval="3000">
                <Certificate
                  image={`certificates/${cert}`}
                  title={titles[index]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
