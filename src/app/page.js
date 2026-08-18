import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Skills from "./components/Skill";
import Project from "./components/Project";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>

      <Header />
      <Banner />
      <Services />
      <Skills />
      <Project />
      <Cards />
      <Contact />
      <Copyright />
      <ScrollToTop />
    </>
  );
}
