import React, { useEffect } from "react";
import Main from "./components/main/main";
import BottomBar from "./components/BottomBar/BottomBar";
import Work from "./components/Work/Work"
import Skills from "./components/Skills/Skills"
import { useTransition, animated } from "react-spring";
import Contact from "./components/Contact/Contact.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

const loader = document.querySelector('.spinner');

// if you want to show the loader when React loads data again
const showLoader = () => loader?.classList.remove('spinner--hide');

const hideLoader = () => loader?.classList.add('spinner--hide');

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(hideLoader, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {transitions((style, item) => (
        <animated.div style={style}>
          <Routes location={item}>
            <Route path={"/"} element={<Main />} />
            <Route path={"/Work"} element={<Work />} />
            <Route path={"/skills"} element={<Skills />} />
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
