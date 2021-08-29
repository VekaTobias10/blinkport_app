import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        fontSize: "2rem",
        gridArea: "icon",
        color: "grey",
        marginLeft: "0.8rem"
    },
    input: {
        gridArea: "input",
        marginRight: "1rem",
    },
    button: {
        backgroundColor: "#BBDEFB",
        color: "white",
        borderRadius: "16px",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        height: "100%",
        maxWidth: "3rem",
    },

});

export default useStyles;