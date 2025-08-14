import React from "react"

import  WelcomePoster  from "./HeroComponents/WelcomePoster"
import HowItWorks from "./HeroComponents/HowItWorks"
import WhycollegeBazaar from "./HeroComponents/WhycollegeBazaar"
import WhatStudentSays from "./HeroComponents/WhatStudentSays"
import Footer from "./BasicComponents/footer"
import Nav from "./BasicComponents/Nav"
import { Outlet } from "react-router"

export function Hero(){
    return(
        <>
        <Nav></Nav>
        <WelcomePoster></WelcomePoster>
        <HowItWorks></HowItWorks>
        <WhycollegeBazaar></WhycollegeBazaar>
        <WhatStudentSays></WhatStudentSays>
        <Footer></Footer>
        <Outlet></Outlet>
        </>
    )
}
