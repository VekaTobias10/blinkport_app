
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    containerMainCards: {
        margin: '0 auto 3rem',
        width: '80%',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },

    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '2rem',
        width: '84%',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            padding: '0.8rem',
        }
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        position: 'static',
        width: 926.84,
        height: '72px',
        left: 46,
        top: 46,
    },

    // root de la card
    root: {
        flexDirection: 'column',
        alignItems: 'flex-Start',
        padding: '1.5rem',
        width: '100%',
        // left: '144px',
        // top: '2460px',
        background: '#FFFFFF',
        boxShadow: '1.90183px 1.90183px 30.4292px rgba(0, 0, 0, 0.08)',
        borderRadius: '17px',

    },

    media: {
        position: 'static',
        width: 34,
        height: 0,
        left: 34,
        top: 36,
        border: '1px solid #000000',
        transform: 'rotate(180deg)',
        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '0px 8px',
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
    },
    textContainerDescription: {
        height: '72.83px',
    },

    iconCheckCircle: {
        marginRight: '6px',
    },
    containerItemList: {
        display: 'flex',
        alignItems: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18.8929px',
        lineHeight: '28px',
        letterSpacing: '0.177121px',
        color: '#000000',
        marginBottom: '0.8rem',
    }


}));

