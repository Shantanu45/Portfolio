import { useState, useEffect } from "react";
import { Col, Row} from "react-bootstrap";
import classes from "../Contact/Contact.module.css";
import gh from "../../assets/Social/github.svg";
import it from "../../assets/Social/instagram.svg";
import ln from "../../assets/Social/linkedin.svg";
import be from "../../assets/Social/behance.svg";
//import Axios from 'axios';

const Contact = () => {
  const emailAddress = "rajatmaurya34@gmail.com";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const [mail, setMail] = useState({ email: "", name: "", message: "" });
  // const [send, setSend] = useState(false);
  const [copyEmail, setCopyEmail] = useState(false);

  const handleEmailCopy = () => {
    // let copyText = emailAddress;
    // if(e.target.name === "myEmail"){
    //     copyText = e.target;
    // }
    // else{
    //     copyText = document.getElementById('myEmail');
    // }
    // /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    // /* Copy the text inside the text field */
    // document.execCommand("copy");
    navigator.clipboard.writeText(emailAddress);
    setCopyEmail(true);
  };

  // const handleChange = (e:) => {
  //     setMail({
  //         ...mail,
  //         [e.target.name]: e.target.value
  //     })
  // }

  //const handleSubmit = (e) => {
  // e.preventDefault()
  // setSend(true);
  // const {name, email, message} = mail;

  // // eslint-disable-next-line no-unused-vars
  // Axios.post('/api/form', {
  //     name,
  //     email,
  //     message
  // }).then(function (response) {
  //     console.log(response.statusText);
  // })

  //}

  return (
    <div className={classes.ContactWrapper}>
      <Row className={classes.Title}>
        <h2 className={classes.TitleText}>Get In Touch!</h2>
        <div className={classes.Underline} />
      </Row>
      <div className={classes.social}>
        <Row className={classes.socialIcons}>
          <Col>
            <a href="https://github.com/Shantanu45">
              <img src={gh} alt="github_icon" />
            </a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/shantanukr34/">
              <img src={ln} alt="linkedIn_icon" />
            </a>
          </Col>
          <Col>
            <a href="https://www.behance.net/rajatmaurya">
              <img src={be} alt="behance_icon" />
            </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/s.h.a.n.tanu/">
              <img src={it} alt="instagram_icon" />
            </a>
          </Col>
        </Row>
        {/*copy email*/}
        <input
          className={classes.EmailText}
          type="text"
          defaultValue={emailAddress}
          style={{
            backgroundColor: copyEmail ? "#cfffa2" : "white",
            border: copyEmail ? "solid 3px #cfffa2" : "solid 2px #d9d9d9",
          }}
          onClick={() => handleEmailCopy()}
          id="myEmail"
          name={"myEmail"}
        />
        <svg
          style={{ position: "relative", left: "-27px" }}
          onClick={() => handleEmailCopy()}
          height="20"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m20.5 24h-12c-1.378 0-2.5-1.121-2.5-2.5v-15c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5v15c0 1.379-1.122 2.5-2.5 2.5zm-12-19c-.827 0-1.5.673-1.5 1.5v15c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5z" />
          <path d="m4.5 21h-1c-1.378 0-2.5-1.121-2.5-2.5v-16c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-.827-.673-1.5-1.5-1.5h-12c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h1c.276 0 .5.224.5.5s-.224.5-.5.5z" />
          <path d="m18.5 17h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z" />
          <path d="m18.5 21h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z" />
          <path d="m18.5 13h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z" />
          <path d="m18.5 9h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z" />
        </svg>
      </div>
    </div>
  );
};

export default Contact;
