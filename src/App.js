import React, { useState, useEffect } from "react";
// import Button from "./Components/Button";
import Header from "./Components/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Index from "./pages/Index";
import Intro from "./Components/Intro";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

export default function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  // const HeroPattern = ({ pttrn, children }) =>
  //       <div className={pttrn}>
  //           {children}
  //       </div>

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translateY(100%)", position: "absolute" },
    enter: { opacity: 1, transform: "translateY(0)", position: "relative" },
    leave: { opacity: 1, transform: "translateY(-100%)", position: "absolute" },
  });

  

  useEffect(() => {
    const timeooutId = setTimeout(() => setShowIntro(false), 3000);
    return () => {
      clearTimeout(timeooutId)
    }
  }, [showIntro])

  return (
    <div className="flex h-full flex-col">
      {!showIntro ? (
        <div className="border-6">
          <Header />
        </div>
      ) : null}
      
      <div className="flex flex-1 flex-col bg-grellow items-center justify-center">
        {showIntro ? (
          <Intro />
        ) : (
          transitions.map(({ item, key, props }) => (
            <animated.div
              className="flex w-full min-h-full items-center justify-center"
              key={key}
              style={props}
            >
              <Switch location={item}>
                <Route exact path="/">
                  {/* <HeroPattern pttrn={'topography-pattern flex h-full'}>
                    
                  </HeroPattern> */}
                  <Index className="flex" />
                </Route>

                <Route path="/aboutme">
                  <About />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </animated.div>
          ))
        )}
      </div>
    </div>
  );
}
