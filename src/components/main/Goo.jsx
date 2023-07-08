import { useTrail, animated, useSpring } from "@react-spring/web";
import "./Goo.css";

const fast = { tension: 600, friction: 150 };
const slow = { mass: 1, tension: 400, friction: 230 };

const calc = (x, y) => [
  x - window.innerWidth * 0.4,
  y - window.innerHeight * 0.5,
];
const trans = (x, y) =>
  `translate3d(${x / 3}px,${y / 3}px,0) translate3d(-50%,-50%,0)`;
const transSlow = (x, y) =>
  `translate3d(${x / 10}px,${y / 10}px,0) translate3d(-50%,-50%,0)`;

const calc1 = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

export default function Goo() {
  const [trail, set] = useTrail(3, () => ({
    xy: [0, 0],
    config: (i) => (i === 0 ? fast : slow),
  }));
  const [shadowProp, setShadow] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 1, tension: 200, friction: 200 },
  }));
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"/>
        </filter>
      </svg>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => {
          set({ xy: calc(x, y) });
          setShadow({ xy: calc1(x, y) });
        }}
      >
        <div className={"hooks-main"}>
          {trail.map((props, index) => {
            if (index === 1) {
              return (
                <animated.div
                  key={index}
                  style={{ transform: props.xy.to(transSlow) }}
                />
              );
            } else {
              return (
                <animated.div
                  key={index}
                  style={{ transform: props.xy.to(trans) }}
                />
              );
            }
          })}
        </div>
        <animated.div
          className="shadow"
          style={{ transform: shadowProp.xy.to(trans1) }}
        />
      </div>
    </>
  );
}
