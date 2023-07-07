import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import classes from "./Description.module.css";

const TextTransition = () => {
  const [index, setIndex] = useState(0);
  const [items] = useState([
    { title: "I am a Graphics/Rendering Engineer", id: 0 },
  ]);

  const fadingTextPropsTransition = useTransition(items[index], {
    from:  {opacity: 0,transform: 'translate3d(0,-20px,0)'},
    enter: {opacity: 1, transform: 'translate3d(0,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(0,20px,0)'},
    config: {tension: 40, friction: 10}
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return fadingTextPropsTransition((style, item) => (
    <animated.div
      style={{
        ...style,
        position: "absolute",
        left: "1px",
        textAlign: "center",
        margin: "auto",
        width: "100%",
      }}
    >
      <h1 className={classes.Para}>{item.title}</h1>
    </animated.div>
  ));
};

export default TextTransition;
