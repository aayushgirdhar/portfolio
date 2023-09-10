import Blob from "./components/Blob/Blob";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <div id="blur"></div>
      <Blob />
      <Navbar />
      <Hero />
      <Quote />
      <Contact />
    </>
  );
}

export default App;
