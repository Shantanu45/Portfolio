import { useEffect } from "react";
import Main from "./components/main/main";
import BottomBar from "./components/BottomBar/BottomBar.tsx";
import { useTransition, animated } from "react-spring";
import Contact from "./components/Contact/Contact.tsx";

import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {transitions((style, item) => (
        <animated.div style={style}>
          <Routes location={item}>
            <Route path={"/"} element={<Main />} />
            <Route path={"/contact"} element={<Contact />} />
            {/* <Route component={Error}/> */}
          </Routes>
        </animated.div>
      ))}
      <BottomBar />
    </>
  );
}

export default App;
