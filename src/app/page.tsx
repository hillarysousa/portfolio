import Header from "./components/header";
import Home from "./sections/home";
import Portfolio from "./sections/portfolio";
import Experience from "./sections/experience";
import Contact from "./sections/contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        {/* <Portfolio /> */}
        <Experience />
        <Contact />
      </main>
    </>
  );
}
