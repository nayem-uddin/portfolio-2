import { Heading } from "./Heading";
import { Skill } from "./Skill";

export const Skillset = () => {
  const names = [
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "JavaScript",
    "ReactJS",
    "Python",
    "Flask",
    "MySQL",
    "Git",
    "VS code",
  ];
  return (
    <div id="skills">
      <Heading headline={`Skills`} />
      <div className="mt-3 set d-flex">
        {names.map((name) => (
          <Skill logo={`skills/${name}-logo.png`} name={name} key={name} />
        ))}
        {names.map((name) => (
          <Skill logo={`skills/${name}-logo.png`} name={name} key={name} />
        ))}
      </div>
    </div>
  );
};
