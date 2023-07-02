import React, {useState, useEffect} from 'react';
import {Card, Col, Row, Form, FormControl} from "react-bootstrap";
import classes from "../Contact/Contact.module.css";
import gh from '../../assets/Social/github.svg'
import it from '../../assets/Social/instagram.svg'
import ln from '../../assets/Social/linkedin.svg'
import be from '../../assets/Social/behance.svg'
//import Axios from 'axios';

const Contact = () => {

    const emailAddress = "rajatmaurya34@gmail.com";

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [mail, setMail] = useState({email: "", name: "", message: ""});
    const [send, setSend] = useState(false);
    const [copyEmail, setCopyEmail] = useState(false);

    const handleEmailCopy = (e) => {
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
    }

    const handleChange = (e) => {
        setMail({
            ...mail,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
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

    }



    return (
        <div className={classes.ContactWrapper}>
            <Row className={classes.Title}>
                <h2 className={classes.TitleText}>Get In Touch!</h2>
                <div className={classes.Underline}/>
            </Row>
            {/* <Row>
                <Col sm={'12'} lg={'12'}>
                    <div className={classes.card}>
                        <Card.Body className={classes.form}>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <FormControl type="text" placeholder={"Name"} name={"name"} id={"contactName"}
                                             style={{margin: "10px", fontSize: "1.2em"}}
                                             onChange={(e) => handleChange(e)} required/>
                                <FormControl type="email" placeholder={"Email"} name={"email"}
                                             style={{margin: "10px", fontSize: "1.2em"}} id={"contactEmail"}
                                             onChange={(e) => handleChange(e)} required/>
                                <textarea className={"form-control"} type="area" placeholder={"Message"}
                                          name={"message"} rows={"5"} style={{margin: "10px", fontSize: "1.1em"}}
                                          onChange={(e) => handleChange(e)} id={"contactMessage"} required/>

                                <button className={send ? "btn btn-success" : "btn btn-primary"} type={"submit"}
                                        style={{margin: "10px", fontSize: "1.2em"}} id={'submitForm'}>
                                    {send ?
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>

                                        : <div>
                                            <span style={{color: 'white', padding: '0 10px'}}>Send</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.3 24.75"
                                                 fill="currentColor" width="1em" height="1em">

                                                <polygon className="a"
                                                         points="24.3 12.05 0 0 5.71 10.42 13.17 11.72 5.78 13.02 0 24.75 24.3 12.05"/>
                                            </svg>
                                        </div>}
                                </button>
                            </Form>
                        </Card.Body>
                    </div>
                </Col>
            </Row> */}
            <div className={classes.social}>
                <Row>
                <a href="https://github.com/Shantanu45"><img src={gh} alt="github_icon"/></a>
                <a href="https://www.linkedin.com/in/shantanukr34/"><img src={ln} alt="linkedIn_icon"/></a>
                <a href="https://www.behance.net/rajatmaurya"><img src={be} alt="behance_icon"/></a>
                <a href="https://www.instagram.com/s.h.a.n.tanu/"><img src={it} alt="instagram_icon"/></a>
                </Row>
                {/*copy email*/}
                <input className={classes.EmailText} type="text" defaultValue={emailAddress}
                       style={{ backgroundColor: copyEmail ? '#cfffa2' : 'white', border:copyEmail?"solid 3px #cfffa2":"solid 2px #d9d9d9"}} onClick={e => handleEmailCopy(e)}
                       id="myEmail" name={"myEmail"}/>
                <svg style={{position:'relative', left: '-27px'}} onClick={e => handleEmailCopy(e)} height="20" viewBox="0 0 24 24" width="20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m20.5 24h-12c-1.378 0-2.5-1.121-2.5-2.5v-15c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5v15c0 1.379-1.122 2.5-2.5 2.5zm-12-19c-.827 0-1.5.673-1.5 1.5v15c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5z"/>
                    <path
                        d="m4.5 21h-1c-1.378 0-2.5-1.121-2.5-2.5v-16c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-.827-.673-1.5-1.5-1.5h-12c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h1c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                    <path d="m18.5 17h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                    <path d="m18.5 21h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                    <path d="m18.5 13h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                    <path d="m18.5 9h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                </svg>
            </div>
        </div>

    )
}

export default Contact;