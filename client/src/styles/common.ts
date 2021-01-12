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
        justifyContent: "flex-start",
        marginTop: "60px",
        backgroundColor: "#212121",
        color: "gray",
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

export const JobOfferStyles = makeStyles(() => ({
    root: {
        backgroundColor: "white",
        color: "black",
        // pading: "100px"
    },
    
    jobOfferContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flexFlow: "wrap",
        marginLeft: "100px",
        marginRight: "100px",
        width: "100%",
        border: "1px solid #ccc",
        backgroundColor: "white",
        color: "black"
    },
    jobOfferItem: {
        display: "flex",
        flexDirection: "row",
        width: "200px",
        padding: "20px 60px",
        // border: "1px solid #ccc"
    },

    positionType: {
        fontWeight: "bold",
        textTransform: "uppercase",
        width: "200px",
        marginLeft: "100px"
    }
}));