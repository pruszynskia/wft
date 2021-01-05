import {makeStyles} from "@material-ui/core";

export const headerStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#303030",
    },
    
    navLogo: {
        padding: "20px",
        color: "#16e0bd"
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    },
    // Buttons

    navButton: {
        backgroundColor: "#474044",
        color: "white",
    },
    navMenu: {
        marginTop: "45px"
    },
    menuItem: {
        backgroundColor: "#424242",
        "&:hover": {
        backgroundColor: "#16e0bd"
        }
    },
    menuList: {
    }
}));

export const footerStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#212121",
        color: "gray"
    },
    footerContainer: {
        display: "flex",
        padding: "0px",
        color: "gray"
    },
    footerItem: {
        padding: "30px"
    },
    navLogo: {
        padding: "20px",
        color: "#16e0bd"
    }

}));