import Hero from "./components/Hero";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Intro from "./components/intro";
import Data from "./components/Data.jsx";
import Footer from "./components/Footer.jsx";
var tempSwitch = true;
export default function App() {
  return (
    <div className="md:relative bg-slate-700">
      <Hero />
      <Intro></Intro>

      {Data.map((item) => {
        console.log(tempSwitch);
        if (tempSwitch == true) {
          tempSwitch = false;
          return (
            <LeftSection heading={item.heading} image={item.image}>
              {item.descr}
            </LeftSection>
          );
        } else {
          tempSwitch = true;
          return (
            <RightSection heading={item.heading} image={item.image}>
              {item.descr}
            </RightSection>
          );
        }
      })}
      <Footer></Footer>
    </div>
  );
}
