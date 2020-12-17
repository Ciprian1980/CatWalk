import React, { useEffect, useState } from "react";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
export default function VerticalCarousel() {
    let data = [img1, img2, img3, img4, img5];

    const main_container = {
        display:"flex",
        width:"30%",
        flexDirection: "column",
        alignItems:"center",
        backgeoundColor:"black",
        padding:"10px 0",

        height:"100%"
    };

    const imag_style = {
        width: "70%",
        margin: "auto",
        height: "auto",
    };


    const img_container = {
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }



    return (
        <div style={main_container }>
            <div>
                <button>up </button>
            </div>
            <div style={img_container}>
                <img style={imag_style} src={img4}></img>
                <img style={imag_style} src={img4}></img>
                <img style={imag_style} src={img4}></img>
                <img style={imag_style} src={img5}></img>
                <img style={imag_style} src={img5}></img>
                <img style={imag_style} src={img5}></img>
                <img style={imag_style} src={img5}></img>
            </div>

            <div>
                <button>down </button>
            </div>
        </div>
    );
}
