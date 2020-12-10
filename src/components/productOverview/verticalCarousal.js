import React, { useEffect, useState } from "react";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
export default function VerticalCarousel() {
    let data = [img1, img2, img3, img4, img5];

    const outer_container = {
        height: "100%",
        backgroundColor: "#ebebeb",
        display:"flex",
        flexDirection:"column"
    };

    const inner_container = {
        width: "inherit",
        height: "80%",
        backgroundColor: "#ebebeb",
        margin: "20px auto",
        overflow:"hidden"
    };

    const button_style =  {
        backgroundColor:"Transparent",
        border:"none",
        outline :"none",
    }
    return (
        <div style={outer_container}>
            <button style={button_style}> <ArrowUpwardIcon/> </button>
            <div
                style={inner_container}
            >
                {data.map((item) => (
                    <img
                        src={item}
                        style={{
                            width: "inherit",
                            padding: "5px",
                            height: "30%",
                        }}
                    />
                ))}
            </div>
            <button style={button_style}><ArrowDownwardIcon/></button>
        </div>
    );
}

