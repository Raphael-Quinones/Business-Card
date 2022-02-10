import React from "react"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"

import Infobb from "./components/mybb/Infobb.js"
import Aboutbb from "./components/mybb/Aboutbb.js"
import Interestsbb from "./components/mybb/Interestsbb.js"
import Footerbb from "./components/mybb/Footerbb.js"

export default function App(){
    return (
        <div className = "container">
            
            <div className = "businessCard">
                <Infobb />
                <Aboutbb />
                <Interestsbb />
                <Footerbb />
            </div>

            <div className = "businessCard">
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>

        </div>
    )
}