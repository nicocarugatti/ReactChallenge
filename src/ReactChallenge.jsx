import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import "../src/assets/scss/app.scss";

export const ReactChallenge = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
