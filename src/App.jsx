import { useState, useEffect } from "react";
import PreLoader from "./components/PreLoader/PreLoader";
import Blob from "./components/Blob/Blob";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Contact from "./components/Contact/Contact";
import ProjectSection from "./components/ProjectSection/ProjectsSection";
function App() {
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutID = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <>
      {isloading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Quote />
          <ProjectSection />
          <Contact />
        </>
      )}
    </>
  );
}
{
  /* <div id="blur"></div> */
}
{
  /* <Blob /> */
}

export default App;
