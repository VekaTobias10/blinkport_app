import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '46px',
        width: '84%',
        height: '9%',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            padding: '0.8rem',
            fontSize: '1.5rem',
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


}));

export default useStyles;