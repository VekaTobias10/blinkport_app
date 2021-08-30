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

// img
// background-image: url(/static/media/header image.9c03d2cc.png);
// background-position: center;
// background-size: cover;
// /* min-height: 553px; */
// border-radius: 20px;
// /* margin-right: 5rem; */
// /* margin-left: 5rem; */
// margin-top: 6rem;
// padding-top: 2rem;
// position: relative;
// margin-bottom: 7rem;
// width: 90%;
// margin: 6rem auto 7rem;