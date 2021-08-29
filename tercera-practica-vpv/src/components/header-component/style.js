
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

navContainer: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '13px 31px',
  position: 'absolute',
  width: '100%',
  height: '67px',
  background: '#ffffff',
  boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.08)',
  top: '0px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.08)',
    padding: '0.5rem',
    alignItems : 'center',
}
},

webLogo: {
  position: 'static',
  width: '118px',
  height: '31px',
  left: '7.44px',
  top: '7.44px',
},
accessBtn: {
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

servicesBar: {
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

li: {
  margin: '0px 8px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
}
},

viewIcon:{
  display:'none',
  [theme.breakpoints.down('sm')]: {
    display:'block',
    color: '#757575',
    borderRadius: '15px',
    fontSize: '2rem',
}    
}

}));