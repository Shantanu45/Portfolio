import React from 'react';
import classes from './Info.module.css'
import Hi from '../../assets/svg/IAm.svg'
import {Row} from 'react-bootstrap'
import DisplayPicture from '../Info/DisplayPicture/DisplayPicture'
//import { Fragment } from "react";
import Description from "./Description/Description"

const Info = () => {
    return (
        <>
            <div className={classes.Info}>
                <div>
                    <img className={classes.Svg} src={Hi} alt="Hi, I AM"/>
                    <DisplayPicture/>
                </div>
                <div>
                    <p className={classes.MyName}>shantanu<br/>kumar</p>
                </div>
            </div>
            <div>
                <div style={{marginTop: '54vh'}}>
                    <Description />
                </div>
                <p className={classes.Greeting} style={{margin: 'auto', marginTop: '58vh'}}>How May I Help You?</p>
            </div>
        </>
    );
};

export default Info;