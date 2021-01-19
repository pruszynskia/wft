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
        color: "white"
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

export const JobOfferStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        color: "black",
        marginLeft: "100px",
        marginRight: "100px",
    },
    
    // Container
    jobOfferContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "white",
        color: "black",
        marginTop: "20px"
    },
    jobOfferInnerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    jobOfferItem: {
        display: "flex",
        height: "100%",
        width: "150px",
        marginLeft: "20px"
    },
   
    // Typography
    upperCaseBold: {
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    bold: {
        fontWeight: "bold",
    }
}));

export const JobOfferDetailsStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#white",
        color: "gray",
        margin: "50px"
    },
    containerGlobal: {
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        border: "1px solid gray",
        width: "100%"
    },
    containerColumn: {
        display: "flex",
        flexDirection: "column"
    },
    containerRow: {
        display: "flex",
        flexDirection: "row"
    },
    containerOpositeRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemColumn: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "10px"
        
    },
    itemRow: {
        display: "flex",
        marginLeft: "10px"
    },
    itemBoxRow: {
        display: "flex",
        padding: "5px 10px",
        marginLeft: "10px",
        border: "1px solid #16e0bd"
    },
    itemDistance: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "10px",
        width: "500px"
    },
    button:{
        backgroundColor: "#16e0bd",
        color: "white",
        padding: "20px"
    },
    bold: {
        fontWeight: "bold",
    },
    textColored: {
        color: "#16e0bd"
    }

}));