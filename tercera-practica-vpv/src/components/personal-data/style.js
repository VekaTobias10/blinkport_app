import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // margin: "5px",
        },
    },
    inputData: {
        width: "190px",
        height: "50px",
        borderRadius: "4px",
    },
    bigInputData: {
        width: "396px",
        height: "50px",
        borderRadius: "4px"
    },

}));





