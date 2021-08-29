import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles((theme) => ({
    bodyContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0px",
        width: "90%",
        [theme.breakpoints.down('sm')]: {
            justifyContent:"center",
            flexWrap: "wrap",
            width: "100%",
        },
    },
 }));