import { useEffect } from "react";
import "./Work.scss";
import UbisoftLogo from "../../assets/Work/UbisoftLogo.jpg"
import VigaLogo from "../../assets/Work/VigaLogo.png"

const Work = () => {
  const workDescription = [
    {
      title: "Ubisoft",
      content: `Implementing and debugging rendering features for android and
      PC. Porting Ubisoft's Anvil Engine (games like Assassin Creed
      and Prince of Persia are developed on this engine) to Android
      and making sure that everything works perfectly as it works on
      PC platform. My team is a part of an initiative for Anvil mobile
      development in Pune itself. Mostly working with C++, C# and
      APIs like Vulkan, DirectX.`,
      image: UbisoftLogo,
      type: "Profestional",
      role: "Junior 3D Programmer"
    },
    {
      title: "Viga Entertainment Technologies Pvt. Ltd.",
      content: `I was Graphics Lead and worked on cutting edge real-time
      computer graphics problems using modern tools and
      technologies like Unreal Engine, Multithreading, Vulkan, C++
      and Qt. Also Worked on Gameplay programming and Plugin
      development for UE4 and Blender. Have worked on one movie, one web series and flight simulator for internal use.`,
      image: VigaLogo,
      type: "Personal",
      role: "Graphics Engineer"
    },
    {
      title: "Podcast Title",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eligendi, fugiat asperiores inventore beatae accusamus odit
          minima enim, commodi quia, doloribus eius! Ducimus nemo
          accusantium maiores velit corrupti tempora reiciendis molestiae
          repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
          neque nulla unde ipsum dolores nobis enim quidem excepturi,
          illum quos!`,
      image: "https://picsum.photos/1000/1000",
      type: "Personal",
      role: "Junior 3D Programmer"
    },
    {
      title: "Podcast Title",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eligendi, fugiat asperiores inventore beatae accusamus odit
          minima enim, commodi quia, doloribus eius! Ducimus nemo
          accusantium maiores velit corrupti tempora reiciendis molestiae
          repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
          neque nulla unde ipsum dolores nobis enim quidem excepturi,
          illum quos!`,
      image: "https://picsum.photos/1000/1000",
      type: "Personal",
      role: "Graphics Engineer"
    },
  ];

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
              <i className="fas fa-calendar-alt mr-2"></i>{element.role}
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
        <div className="container py-2">{fillWorkContent()}</div>
    </>
  );
};

export default Work;
