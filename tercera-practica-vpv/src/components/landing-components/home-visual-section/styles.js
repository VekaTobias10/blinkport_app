import headerImage from '../../../assets/img/header-image.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: "2rem",
        gridArea: "icon",
        color: "grey",
        marginLeft: "0.8rem",
    },
    input: {
        gridArea: "input",
        marginRight: "1rem",
    },
    button: {
        backgroundColor: "#BBDEFB",
        color: "white",
        borderRadius: "16px",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        // height: "100%",
        // maxWidth: "3rem",
        [theme.breakpoints.down('sm')]: {
            width: "90%",
            margin: "auto",
        },
    },
    imgRow: {
        backgroundImage: `url(${headerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "34.5rem",
        borderRadius: "1.25rem",
        marginRight: "5rem",
        marginLeft: "5rem",
        marginTop: "6rem",
        paddingTop: "2rem",
        position: "relative",
        marginBottom: "7rem",
        [theme.breakpoints.down('sm')]: {
            marginTop: "6rem",
            paddingTop: "2rem",
            position: "relative",
            marginBottom: "7rem",
            width: "90%",
            margin: "6rem auto 7rem",
            minHeight: "17rem",
        },
    },
    textImg: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0rem",
        color: "white",
        lineHeight: "1rem",
    },
    reservationContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spaceBetween",
        alignItems: "center",
        padding: "1rem 5rem",
        position: "absolute",
        width: "48.75rem",
        height: "6rem",
        bottom: "0rem",
        left: "50%",
        transform: "translate(-50%, 50%)",
        background: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0.33rem 0.33rem 1.87rem rgba(83, 83, 83, 0.08)",
        borderRadius: "1.25rem",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            minHeight: "15rem",
            width: "94%",
            padding: "1rem 1rem",
        },
    },
    reservationLittleContainers:{
        display: "grid",
        /* grid-template-columns: 1fr 1fr;
        grid-template-rows: 2fr 1fr; */
        gridTemplateAreas:
          `'icon title title title'
          'icon input input input'`,
        gridGap: "0.3rem",
        alignItems: "center",
        borderRight: "solid black 1px",
        [theme.breakpoints.down('sm')]: {
            borderRight: "hidden",
        },
    },
    textImgP: {
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
        marginTop: "0.31rem",
        marginBottom: "1.37rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1rem",
        },
    },
    textImgH1: {
        marginTop: "0rem",
        fontSize: "3rem",
        letterSpacing: "0.05rem",
        lineHeight: "3.5rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5rem",
        },

    }



}));

export default useStyles;

// img
// background-image: url(/static/media/header image.9c03d2cc.png);
// background-position: center;
// background-size: cover;
// /* min-height: 553px; */
// border-radius: 20px;
// /* margin-right: 5rem; */
// /* margin-left: 5rem; */
// margin-top: 6rem;
// padding-top: 2rem;
// position: relative;
// margin-bottom: 7rem;
// width: 90%;
// margin: 6rem auto 7rem;