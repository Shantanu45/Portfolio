import React from "react";
import classes from "./BottomBar.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

const BpttomBar = () => {
    const activeStyle  = ({ isActive, isPending }) => {
        return {
          // borderBottom: isActive ? "5px solid #f1ee12" : "",
          color: isActive ? "black" : '#ff561f',
        };
      }
  return (
    <div className={classes.Links}>
      <Row>
        <Col className={classes.NavLinks} lg={3} md={6} xs={6}>
          <NavLink
            to={"/"}
            style={activeStyle}
          >
            Home
          </NavLink>
        </Col>
        <Col className={classes.NavLinks} lg={3} md={6} xs={6}>
          <NavLink
            to={"/contact"}
            style={activeStyle}
          >
            Contact
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default BpttomBar;
