import  WelcomePoster  from "./HeroComponents/WelcomePoster"
import HowItWorks from "./HeroComponents/HowItWorks"
import WhycollegeBazaar from "./HeroComponents/WhycollegeBazaar"
import WhatStudentSays from "./HeroComponents/WhatStudentSays"
import Footer from "./BasicComponents/footer"
export function Hero(){
    return(
        <>
        <WelcomePoster></WelcomePoster>
        <HowItWorks></HowItWorks>
        <WhycollegeBazaar></WhycollegeBazaar>
        <WhatStudentSays></WhatStudentSays>
        <Footer></Footer>
        </>
    )
}
