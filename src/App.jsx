import Certificates from "./components/Certificates";
import Cover from "./components/Cover";
import { Education } from "./components/Education";
import Navbar from "./components/Navbar";
import { Skillset } from "./components/Skillset";

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Education />
      <Skillset />
      <Certificates />
    </div>
  );
}

export default App;
