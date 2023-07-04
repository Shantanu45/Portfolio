import React, { useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import classes from "./Skills.module.css";
import Vulkan from "../../assets/Skills/Graphics Frameworks/vulkan_big.svg";
import DX12 from "../../assets/Skills/Graphics Frameworks/dx12.svg";
import Opengl from "../../assets/Skills/Graphics Frameworks/opengl.svg";
import DX11 from "../../assets/Skills/Graphics Frameworks/dx11.svg";

import Cpp from "../../assets/Skills/Languages/cpp.svg";
import CS from "../../assets/Skills/Languages/csharp.svg";
import Python from "../../assets/Skills/Languages/python.svg";
import JS from "../../assets/Skills/Languages/javascript.svg";

import Git from "../../assets/Skills/Tools/git.svg";
import Jira from "../../assets/Skills/Tools/jira.svg";
import Perforce from "../../assets/Skills/Tools/perforce.svg";
import VS from "../../assets/Skills/Tools/vs.svg";
import RenderDoc from "../../assets/Skills/Tools/renderdoc.svg";
import Cmake from "../../assets/Skills/Tools/cmake.svg";

import Unreal from "../../assets/Skills/Engines/unreal_big.svg";
import Unity from "../../assets/Skills/Engines/unity_big.svg";

import Photoshop from "../../assets/Skills/More/Photoshop.svg";
import Illustrator from "../../assets/Skills/Graphics/AdobeIllustrator.png";
import Blender from "../../assets/Skills/Graphics/Blender.png";
import Maya from "../../assets/Skills/More/Maya.svg";

import TF from "../../assets/Skills/More/TensorFLow.svg";
import MongoDb from "../../assets/Skills/More/Mongodb.svg";
import OpenCV from "../../assets/Skills/More/Opencv.svg";
import Ds from "../../assets/Skills/More/DSA.svg";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.SkillWrapper} style={{ overflowX: "hidden" }}>
      <Container style={{ height: "100%" }}>
        <Row>
          <Col
            sm={"12"}
            md={"6"}
            lg={"6"}
            className={classes.Web}
            style={{ margin: "7px auto" }}
          >
            <div className={classes.card} style={{ height: "100%" }}>
              <Card.Body>
                <h4 className={classes.title}>Graphics Frameworks</h4>
                <Row>
                  <Col
                    lg={6}
                    md={12}
                    sm={6}
                    style={{ height: "50%", margin: "20px 0px 10px 0px"}}
                  >
                    <img src={Vulkan} alt={"Vulkan"} />
                  </Col>
                  <Col
                    lg={6}
                    md={12}
                    sm={6}
                    style={{ height: "50%", margin: "20px 0px 10px 0px" }}
                  >
                    <img src={DX12} alt={"DX12"} />
                  </Col>
                </Row>
                <Row>
                  <Col
                    lg={4}
                    md={12}
                    sm={4}
                    style={{ height: "50%", margin: "20px 0px 10px 0px" }}
                  >
                    <img src={Opengl} alt={"Opengl"} />
                  </Col>
                  <Col
                    lg={4}
                    md={12}
                    sm={4}
                    style={{ height: "50%", margin: "auto" }}
                  >
                    <img src={DX11} alt={"DX11"} />
                  </Col>
                </Row>
              </Card.Body>
            </div>
          </Col>
          <Col sm={"12"} md={"6"} lg={"6"} style={{ margin: "7px auto" }}>
            <div className={classes.card} style={{ height: "100%" }}>
              <Card.Body>
                <h4 className={classes.title}>Languages</h4>
                <Row>
                  <Col style={{ height: "50%", margin: "20px 0px" }}>
                    <img
                      src={Cpp}
                      alt={"Cpp"}
                      style={{
                        display: "block",
                        width: "40%",
                        margin: "auto"
                      }}
                    />
                  </Col>
                  <Col style={{ height: "50%", margin: "20px 0px"}}>
                    <img
                      src={CS}
                      alt={"CS"}
                      style={{
                        display: "block",
                        width: "40%",
                        margin: "auto"
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} style={{ height: "50%", margin: "20px 0px" }}>
                    <img
                      src={Python}
                      alt={"Python"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "30%",
                      }}
                    />
                  </Col>
                  <Col lg={6} style={{ height: "50%", margin: "20px 0px" }}>
                    <img
                      src={JS}
                      alt={"JS"}
                      style={{
                        display: "block",
                        width: "30%",
                        margin: "auto"
                      }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={"12"} md={"6"} lg={"4"} style={{ margin: "7px auto" }}>
            <div className={classes.card} style={{ height: "100%" }}>
              <Card.Body>
                <h4 className={classes.title}>Tools</h4>
                <Row>
                  <Col style={{ height: "50%", margin: "20px 0px"}}>
                    <img
                      src={Git}
                      alt={"tf"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "50%",
                      }}
                    />
                  </Col>
                  <Col style={{ height: "50%", margin: "20px 0px" }}>
                    <img
                      src={Jira}
                      alt={"sklearn"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "50%",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ height: "50%", margin: "20px 0px" }}>
                    <img
                      src={Perforce}
                      alt={"keras"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "80%",
                      }}
                    />
                  </Col>
                  <Col style={{ height: "50%", margin: "auto" }}>
                    <img
                      src={VS}
                      alt={"numpy"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "80%",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ height: "50%", margin: "auto" }}>
                    <img
                      src={RenderDoc}
                      alt={"numpy"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "50%",
                      }}
                    />
                  </Col>

                  <Col style={{ height: "50%", margin: "auto" }}>
                    <img
                      src={Cmake}
                      alt={"numpy"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "80%",
                      }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </div>
          </Col>
          <Col sm={"12"} md={"6"} lg={"4"} style={{ margin: "7px auto" }}>
            <div className={classes.card} style={{ height: "100%" }}>
            <Card.Body>
                <h4 className={classes.title}>Engines</h4>
                <Row>
                  <Col style={{ height: "50%", margin: "20px 0px" }}>
                    <img
                      src={Unreal}
                      alt={"tf"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "40%",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ height: "50%", margin: "40px 0px" }}>
                    <img
                      src={Unity}
                      alt={"sklearn"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "50%",
                      }}
                    />
                  </Col>
                </Row>
            </Card.Body>
            </div>
          </Col>
          <Col sm={"12"} md={"6"} lg={"4"} style={{ margin: "7px auto" }}>
            <div className={classes.card} style={{ height: "100%" }}>
              <Card.Body>
                <h4 className={classes.title}>And More...</h4>
                <Row>
                  <Col style={{ height: "50%", margin: "auto" }}>
                    <img
                      src={Maya}
                      alt={"opengl"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "80%",
                      }}
                    />
                  </Col>
                  <Col style={{ height: "50%", margin: "auto" }}>
                    <img
                      src={Ds}
                      alt={"ds"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "80%",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ height: "50%", margin: "auto" }}>
                    <img
                      src={OpenCV}
                      alt={"unity"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "80%",
                      }}
                    />
                  </Col>
                  <Col style={{ height: "50%", margin: "auto" }}>
                    <img
                      src={Photoshop}
                      alt={"opencv"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "50%",
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col style={{ height: "50%", margin: "auto" }}>
                    <img
                      src={TF}
                      alt={"mongo"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "80%",
                      }}
                    />
                  </Col>
                  <Col style={{ height: "50%", margin: "auto" }}>
                    <img
                      src={MongoDb}
                      alt={"sql"}
                      style={{
                        display: "block",
                        margin: "auto",
                        width: "80%",
                      }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Skills;
