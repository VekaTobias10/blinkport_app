import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // margin: "5px",
        },
    },
    inputData: {
        width: "11.87rem",
        height: "3.12rem",
        borderRadius: "0.25rem",
    },
    bigInputData: {
        width: "24.75rem",
        height: "3.12rem",
        borderRadius: "0.25rem"
    },
    checkBoxElement: {
        padding: "0.25rem"
    },
    personalDataBigcontainer:{
        display: "flex",
        justifyContent: "space-evenly",
        width: "85%",
        margin: "2rem auto",
        [theme.breakpoints.down('sm')]: {
            width:"fit-content",
        }
    },
    imgContainerPersonal:{
        [theme.breakpoints.down('sm')]: {
            display:"none",
        }
    },
    personalDataInputTitelcontainer:{
        width: "25.56rem",
        // maxHeight: "18.75rem",
        marginRight: "3.12rem",
        [theme.breakpoints.down('sm')]: {
            width:"fit-content",
        }
    },
    inputOculto:{
        border:"none",
        color:"transparent",
    }

}));





