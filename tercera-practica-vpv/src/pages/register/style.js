import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles((theme) => ({
    pageContainer:{
    display: "flex",
    flexDirection: "row",
    width: "80%",
    margin: "auto",
    padding: "2rem",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
    },
    accountContainer:{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      borderRight:  "1px solid #9E9E9E",
      padding: "2rem 5rem 2rem 2rem",
      [theme.breakpoints.down('sm')]: {
        padding: "0rem",
        borderRight: "none",
        borderBottom:"1px solid #9E9E9E",
        paddingBottom:"2.5rem",
      }
    },
    singupContainer:{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: "2rem",
      [theme.breakpoints.down('sm')]: {
        padding: "0rem",
      },
    },
    singupTitle:{
      fontWeight: "400",
      fontStyle: "normal",
      fontSize: "2rem",
      color: "#9E9E9E",
      margin: "1.5rem 0rem",
    },
    singupParagraph:{
      fontWeight: "400",
      fontStyle: "normal",
      fontSize: "1.1rem",
      color: "#9E9E9E",
      lineHeight: "2rem",
      letterSpacing: "0.009rem",
      maxWidth: "58%",
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: "column",
     
    },
    margin: {
      margin: theme.spacing(1),
      background:"#FAFAFA",
      color:"#9E9E9E",
      height:"2.7rem",

    },
    buttonlogin:{
      background:"#BBDEFB",
    },

  }));