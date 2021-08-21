import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({


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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-Start',
        padding: '2rem',
        width: '314px',
        height: '475px',
        left: '144px',
        top: '2460px',
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

});
