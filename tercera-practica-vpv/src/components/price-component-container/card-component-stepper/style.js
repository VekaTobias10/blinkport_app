import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    containerMainCards: {
        margin: 'auto',
        width: '80%',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },

    // root de la card
    root: {
        flexDirection: 'column',
        alignItems: 'flex-Start',
        padding: '1rem',
        width: '100%',
        margin: '1.5rem',
        background: '#FFFFFF',
        boxShadow: '1.90183px 1.90183px 30.4292px rgba(0, 0, 0, 0.08)',
        borderRadius: '17.7121px',
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            margin: '1.8rem auto',
        }

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
        [theme.breakpoints.down('sm')]: {
            height: '6rem',
        }
    },
    // textContainerDescriptionTwo:{
    //     [theme.breakpoints.down('sm')]: {
    //         height: '72.83px',
    //     }
    // },

    iconCheckCircle: {
        marginRight: '6px',
    },
    containerItemList: {
        display: 'flex',
        alignItems: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1.2rem',
        lineHeight: '28px',
        letterSpacing: '0.177121px',
        color: '#000000',
        marginBottom: '0.8rem',
    },
    titleModal:{
        display:'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            width: '80%',
            margin: '0.5rem auto',
            fontSize: '2rem',
            color: '#9E9E9E',
            fontWeight: 'normal',
        }
    },


}));

