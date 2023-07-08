
import classes from "./BottomBar.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

const BpttomBar = () => {
  interface isActiveOrPending {
    isActive: Boolean,
    isPending: Boolean
  }
  const activeStyle = (isActiveOrPending:isActiveOrPending) => {
    return {
      borderBottom: isActiveOrPending.isActive ? "500px solid #000000" : "",
      color: isActiveOrPending.isActive ? "black" : "#ff561f",
    };
  };
  return (
    <div className={classes.Links}>
      <Row>
        <Col className={classes.NavLinks}>
          <NavLink to={"/"} style={activeStyle}>
            Home
          </NavLink>
        </Col>
        <Col className={classes.NavLinks}>
          <NavLink to={"/work"} style={activeStyle}>
            Work
          </NavLink>
        </Col>
        <Col className={classes.NavLinks}>
          <NavLink to={"/skills"} style={activeStyle}>
            Skills
          </NavLink>
        </Col>
        <Col className={classes.NavLinks}>
          <NavLink to={"/contact"} style={activeStyle}>
            Contact
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default BpttomBar;
