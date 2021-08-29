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
    navContainerModal: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
          display: 'block',
          boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.08)',
          padding: '0.5rem',
      }
  },
  navContainerModalTwo:{
      [theme.breakpoints.down('sm')]: {
          display: 'flex',
          alignItems : 'center',
      }
  },
  webLogoModal: {
      position: 'static',
      width: '118px',
      height: '31px',
      left: '7.44px',
      top: '7.44px',
  },
  accessBtnModal: {
      backgroundColor: '#263238',
      color: '#ffffff',
      position: 'absolute',
      width: '90px',
      height: '34px',
      right: '100.06px',
      top: 'calc(50% - 34px / 2)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
      [theme.breakpoints.down('sm')]: {
          display: 'none',
      }
  },
  servicesBarModal: {
      display: 'flex',
      listStyle: 'none',
      color: '#bdbdbd',
      margin: '0px auto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '10.4217px',
      lineHeight: '0.65rem',
      width: '320px',
  },
  liModal: {
      margin: '0px 8px',
      [theme.breakpoints.down('sm')]: {
          display: 'none'
      }
  },
  viewIcon: {
      [theme.breakpoints.down('sm')]: {
          color: '#757575',
          borderRadius: '15px',
          fontSize: '2rem',
      }
    },   

  }));