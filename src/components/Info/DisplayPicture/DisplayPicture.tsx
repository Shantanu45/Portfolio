import Me from '../../../assets/MyPicture/me3.jpg';
import classes from './DisplayPicture.module.css'

const DisplayPicture = () => {
    return (
        <>
            <img className={classes.MyPicture} src={Me} alt="myImg"/>
        </>
    );
};

export default DisplayPicture;