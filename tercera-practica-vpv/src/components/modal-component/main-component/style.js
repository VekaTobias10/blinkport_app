import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        margin: "auto",
        color:"#BBDEFB",
        [theme.breakpoints.down('sm')]: {
            marginTop: '0.6rem',
            width: "fit-content",
        }
    },
    button: {
        backgroundColor: "#BBDEFB",
        color: "white",
        width: '29%',
        marginLeft: '12rem',
    },
    btnBack: {
            backgroundColor: "#BBDEFB",
            color: "white",
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            right: '-1rem',
            margin: '1rem',

        }
    },
    btnNext: {
        backgroundColor: "#BBDEFB",
        color: "white",
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            right: '-1rem',
            margin: '1rem',
        }
    },
    btnHome:{
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            right: '-1rem',
            margin: '1rem',
        }
    },
    btnSkip: {
        display: 'none'
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    navContainerModal: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.08)',
            padding: '0.5rem',
        }
    },
    navContainerModalTwo: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center',
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
    labelMobile: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));