
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    containerMainCards: {
        margin: '0 auto 3rem',
        width: '80%',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: 'auto',
            width: '80%'
        }
    },

    // root de la card
    root: {
        flexDirection: 'column',
        alignItems: 'flex-Start',
        padding: '1.5rem',
        width: '100%',
        background: '#FFFFFF',
        boxShadow: '1.90183px 1.90183px 30.4292px rgba(0, 0, 0, 0.08)',
        borderRadius: '17px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    buttonPrices: {
        backgroundColor: "#BBDEFB",
        color: "white",
        borderRadius: "16px",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        width: '100%',
        height: '51.96px',
        margin: '0.8rem auto',
    },
    cardLanding: {
        margin: '1.5rem',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            padding: '1.5rem 0',
            width: '70%',
        }
    },
    priceNumber: {
        fontSize: '28.34px',
        lineHeight: '38px',
        textAlign: 'Left',
        verticalAlign: 'Top',
        color: '#000000',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    monthText: {
        color: '#979797',
        fontSize: '14.53px',
        lineHeight: '50px',
    },
    textDescriptionCard: {
        position: 'static',
        color: '#979797',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.177121px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    textContainerDescription: {
        height: '72.83px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },

    iconCheckCircle: {
        marginRight: '6px',
    },
    containerItemList: {
        display: 'flex',
        alignItems: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1.3rem',
        lineHeight: '28px',
        letterSpacing: '0.177121px',
        color: '#000000',
        marginBottom: '0.8rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }


}));

