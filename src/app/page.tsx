import Header from "./components/header";
import Home from "./sections/home";
import Portfolio from "./sections/portfolio";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Portfolio />
      </main>
    </>
  );
}
