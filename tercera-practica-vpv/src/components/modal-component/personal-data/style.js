import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // margin: "5px",
        },
    },
    inputData: {
        width: "11.87rem",
        height: "3.12rem",
        borderRadius: "0.25rem",
    },
    bigInputData: {
        width: "24.75rem",
        height: "3.12rem",
        borderRadius: "0.25rem"
    },
    checkBoxElement: {
        padding: "0.25rem"
    }

}));





