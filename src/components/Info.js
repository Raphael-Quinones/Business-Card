import React from "react"
import me from "../images/me.jpeg"
import Email from "../images/Email Icon.png"

export default function Info(){
    return (
        <div className = "info">
            <img className = "myPicture"src = {me} />
            <div className = "info--name">
                Raphael Quinones
            </div>
            <div className = "info--subtitle">
                Aspiring Web3 Developer
            </div>
            <a className = "info--website">
                blackzephyr.crypto
            </a>

            <div className = "info--buttons">
                <a className = "info--buttons--email">
                    <img src = {Email}/>
                    Email
                </a>
                

            </div>
        </div>
    )
}