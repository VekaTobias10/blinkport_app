import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles((theme) => ({
    headerCarouselContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1.5rem 2.8rem",
        width: "90%",
        /* height: 310px; */
        marginBottom: "4rem",
        [theme.breakpoints.down('sm')]: {
            padding: "0.5rem",
            width: "100%",
        }
    },
    lineTitle:{
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down('sm')]: {
            margin:"0rem",
        }
    },
    titleCarousel:{
        fontWeight: "300",
        fontStyle: "normal",
        fontSize: "3.75rem",
        margin: "0rem 0rem 1rem 0rem",
        [theme.breakpoints.down('sm')]: {
            width:"20rem",
            fontSize:"2.40rem",
        }
    },
    line:{
        height: "0.06rem",
        marginTop: "2.62rem",
        marginRight: "0.5rem",
        width: "2.12rem",
        border: "1px solid #000000",
        [theme.breakpoints.down('sm')]: {
            marginTop: "2rem",
        },
    },
 }));