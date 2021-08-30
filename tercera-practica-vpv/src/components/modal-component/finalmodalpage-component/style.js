import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles((theme) => ({
    mainContainerRegistration:{
        display: "flex",
        width: "90%",
        margin: "3rem auto 1rem",
    },
    msgRegistration:{
        width: "50%",
        padding: "3rem",
        marginTop: "6rem",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            width: "90%",
            marginTop: "3rem",

        },
    },
    iconModalReg:{
        color: "#BBDEFB",
    },
    containerRegistration:{
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            display:"none",
        },
            
    },
    subRegText:{
        color:"#AAAAAA",
    }
 }));