import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { fade, withStyles } from '@material-ui/core/styles';

export default function CustomSearchAppBar() {
    const main_container = {
        backgroundColor: "#525252",
        height: "80px",
        position: "sticky",
        top: "0",
        width: "80%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
    };

    const StyledButton = withStyles({
        root: {
            color: "white",
            height: 48,
            borderBottom :"solid white 2px",
        },
    })(TextField);
    //const classes = useStyles();

    return (
        <div style={main_container}>
            <Logo />
            <div>
                <StyledButton>
                </StyledButton>
                <SearchIcon style={{ color: "white" }} />
            </div>
        </div>
    );
}

function Logo() {
    const logo_style = {
        marginLeft:"20px",
        textDecoration:"underline",
        fontStyle: "italic",
        color: "white",
    };
    return <h1 style={logo_style}>Logo</h1>;
}
