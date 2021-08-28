import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles((theme) => ({
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
    }
  }));