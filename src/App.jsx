import { useState, useEffect } from "react";
import PreLoader from "./components/PreLoader/PreLoader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Contact from "./components/Contact/Contact";
import ProjectSection from "./components/ProjectSection/ProjectsSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
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
          <ScrollToTop />
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

export default App;
