import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({

    containerMainCards: {
        margin: 'auto',
        width: '80%',
        display: 'flex',
    },

    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '46px',
        width: '84%',
        height: '9%',
        margin: 'auto',
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
        padding: '1rem',
        width: '100%',
        margin: '1.5rem',
        // left: '144px',
        // top: '2460px',
        background: '#FFFFFF',
        boxShadow: '1.90183px 1.90183px 30.4292px rgba(0, 0, 0, 0.08)',
        borderRadius: '17.7121px',

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
        padding: "1rem",
        width: '100%',
        margin: '0.8rem auto',
    },
    card: {
        margin: '1rem',
        padding: '1rem',
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


});

// width: 322px;
// padding: 1.5rem;
// background: #FFFFFF;
// box-shadow: 1.90183px 1.90183px 30.4292px rgb(0 0 0 / 8%);
// align-items: flex-Start;
// border-radius: 17.7121px;
// flex-direction: column;
