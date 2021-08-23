import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  mainContainer: {
    backgroundColor: '#263238',
    display: 'flex',
    padding: '2rem 9rem 2rem',
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#FFFFFF',
    fontSize: '15px',
  },
  boxFooter: {
    display: 'flex',
    flexDirection: 'row',
  },
  legalContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
  },
  languageContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',

  },
}));