import React from "react"
import me from "../../images/mybb.jpeg"
import Email from "../../images/Email Icon.png"

export default function Infobb(){
    return (
        <div className = "info">
            <img className = "myPicture"src = {me} />
            <div className = "info--name">
                Eunice Anada
            </div>
            <div className = "info--subtitle">
                Future Surgeon | Writer | Detective
            </div>
            <a className = "info--website">
                @euniceanada
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