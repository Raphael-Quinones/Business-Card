import React from "react"
import Facebook from "../../images/Facebook Icon.png";
import Instagram from "../../images/Instagram Icon.png";
import Twitter from "../../images/Twitter Icon.png";
import GitHub from "../../images/GitHub Icon.png";


export default function Footerbb(){
    return(
        <div className = "footer">
            <a className = "footer--icon">
                <img src = {Facebook}/>
            </a>
            <a className = "footer--icon">
                <img src = {Instagram}/>
            </a>
            <a className = "footer--icon">
                <img src = {Twitter}/>
            </a>
            <a className = "footer--icon">
                <img src = {GitHub}/>
            </a>

        </div>
    )
}