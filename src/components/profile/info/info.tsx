import React from "react";
import img_profile_mahiro0x00 from "../../../img/profile/info/mahiro0x00.png";
import SecInfoLink from "./SecInfoLink";

import img_location from "../../../img/profile/info/location.png"
import img_mail from "../../../img/profile/info/mail.png"
import img_linkedin from "../../../img/profile/info/linkedin.png"
import img_x from "../../../img/profile/info/x.png"
import img_github from "../../../img/common/github.png"
import img_hatena from "../../../img/profile/info/hatena.png"

const Info:React.FC = ()=>{
    return (
        <div className="pt-8 text-center md:pr-10">
            <img src={img_profile_mahiro0x00} alt="" className="mx-auto rounded-full h-36 w-36" />
            <div className="py-8">
                <p className="text-2xl">mahiro</p>
                <p className="text-base text-gray-400">Backend engineer</p>
            </div>
            <div className="mb-8 w-48 mx-auto">
                <SecInfoLink text={"Tokyo, Japan"} img={img_location} link={""}/>
                <SecInfoLink text={"mahiro.yoshie@gmail.com"} img={img_mail} link={""}/>
                <SecInfoLink text={"Linkedin"} img={img_linkedin} link={"https://www.linkedin.com/in/mahiro-yoshie-15a8b9230/"}/>
                <SecInfoLink text={"Hatena Blog"} img={img_hatena} link={"https://mahiro72.hatenablog.com/"}/>
            </div>
            <div className="w-48 mx-auto">
                <SecInfoLink text={"@mahiro0x00"} img={img_x} link={"https://twitter.com/mahiro0x00"}/>
                <SecInfoLink text={"@mahiro72"} img={img_github} link={"https://github.com/mahiro72"}/>
            </div>
        </div>
    )
}

export default Info;