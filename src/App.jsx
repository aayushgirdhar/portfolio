import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Blob from "./components/Blob/Blob";
function App() {
  return (
    <>
      <Blob />
      <div id="blur"></div>
      <Navbar />
      <Hero />
      <Quote />
    </>
  );
}

export default App;
