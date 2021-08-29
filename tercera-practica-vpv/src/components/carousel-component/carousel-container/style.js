import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles((theme) => ({
    carouselContainer:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "5rem",
        /* height: 45.8rem; */
        backgroundColor:"rgb(176, 209, 247)",
        [theme.breakpoints.down('sm')]: {
            padding:"2rem",
        }
    }
 }));