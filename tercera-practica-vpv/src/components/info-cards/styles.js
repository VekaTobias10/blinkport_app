import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles((theme) => ({


container : {
  display: 'flex',
  maxWidth: '90%',
  flexDirection: 'row',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  marginTop: '15px',
  marginLeft: 'auto',
  marginBottom: '89px',
  marginRight: 'auto',
  justifyContent: 'spaceBetween',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
},
},
cardPaperContainer:{
  margin: '0 0.6rem',
  [theme.breakpoints.down('sm')]: {
    margin: '1rem auto',
},
}

}));