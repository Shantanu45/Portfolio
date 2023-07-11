import "./Work.scss";
import UbisoftLogo from "../../assets/Work/UbisoftLogo.jpg";
import VigaLogo from "../../assets/Work/VigaLogo.png";
import Engine from "../../assets/Work/Engine.png";
import DR from "../../assets/Work/Distrubuted Redering.png";
import FlightSimulation from "../../assets/Work/flight simulation.png";
import LightStage from "../../assets/Work/light stage.png";
import Mocap from "../../assets/Work/motion capture.png";
import RayTracing from "../../assets/Work/ray tracing.png";
import Multiplayer from "../../assets/Work/unreal multiplyer.png";
import Delayed from "../Delayed";

const Work = () => {
  const workDescription = [
    {
      title: "Ubisoft",
      content: `Implementing and debugging rendering features for android and
      PC. Developing features and tools for Anvil Editor and render. 
      Porting Ubisoft's Anvil Engine (games like Assassin Creed
      and Prince of Persia are developed on this engine) to Android
      and making sure that everything works perfectly as it works on
      PC platform. Mostly working with C++, C# and
      APIs like Vulkan, DirectX.`,
      image: UbisoftLogo,
      type: "Professional",
      role: "Junior 3D Programmer",
    },
    {
      title: "Viga Entertainment Technologies",
      content: `I was Graphics Lead and worked on cutting edge real-time
      computer graphics problems using modern tools and
      technologies like Unreal Engine, Multithreading, Vulkan, C++
      and Qt. Also Worked on Gameplay programming and Plugin
      development for UE4 and Blender. Have worked on one movie, one web series 
      and flight simulator for internal use.`,
      image: VigaLogo,
      type: "Personal",
      role: "Graphics Engineer",
    },
    {
      title: "Prettier Engine",
      content: `Vulkan Engine made using C++ and Win32 API with deferred rendering and forward rendering using multiple sub
      passes, with support for shadows, different types of lights, environment maps etc.`,
      image: Engine,
      type: "Personal",
      role: "Personal Project",
    },
    {
      title: "Multiplayer game in Unreal Engine",
      content: `Multiplayer third-person shooter game made with Unreal Engine 4.
      The game has realistic-looking graphics, character creator, and AI enemies. It can 
      be played in Co-op mode as well.`,
      image: Multiplayer,
      type: "Personal",
      role: "Personal Project",
    },
    {
      title: "Distributed Rendering in UE4",
      content: `Developed UE4 plugin for Distributed Rendering. The primary goal was to 
      use all the idle computers in the office as a rendering farm and offload rendering tasks
      from a host PC.`,
      image: DR,
      type: "Professional",
      role: "Graphics Engineer (Viga Entertainment Technologies)",
    },
    {
      title: "Flight Simulation in UE4",
      content: `Simulating flight mechanics for a web series. This simulation is developed to 
      help the Director of the series to convey his ideas clearly and also provide rough idea of how
      action scene will look like to the artists.`,
      image: FlightSimulation,
      type: "Profestional",
      role: "Graphics Engineer (Viga Entertainment Technologies)",
    },
    ,
    {
      title: "Motion capture",
      content: `Develop and provide visualization for the motion capture data. This involved interpretation of
      the data from the sensors to the quaternions, then providing visualization in out application and add support 
      for playback.`,
      image: Mocap,
      type: "Professional",
      role: "Graphics Engineer (Viga Entertainment Technologies)",
    },
    {
      title: "Ray Tracer",
      content: `Simple ray tracer developed using OpenGL in college with support for path tracing and
      global illumination.`,
      image: RayTracing,
      type: "Personal",
      role: "Personal project",
    },
    {
      title: "Light Stage",
      content: `Research and developed an application for photogrammetry. This application generates a
      3d point cloud using multiple images of an object and later generating a 3D model out of it. 
      This uses algorithms like SFM. This helped the development of in house light stage.
      Which was later used in multiple movies.`,
      image: LightStage,
      type: "Personal",
      role: "Graphics Engineer (Viga Entertainment Technologies)",
    }
  ]

  function fillWorkContent() {
    return workDescription.map((element) => (
      <article className="postcard light color">
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src={element.image}
            alt="Image Title"
          />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">
            <h1>{element.title}</h1>
          </h1>
          <div className="postcard__subtitle">
            <i className="fas fa-calendar-alt mr-2"></i>
            {element.role}
          </div>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">{element.content}</div>
          {/* <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Podcast
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>55 mins.
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>Play Episode
                  </a>
                </li>
              </ul> */}
        </div>
      </article>
    ));
  }

  return (
    <>
    <Delayed waitBeforeShow={800} >
      <div className="container py-2">{fillWorkContent()}</div>
    </Delayed>
    </>
  );
};

export default Work;
