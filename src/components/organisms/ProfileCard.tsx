import { EmailIcon } from "../molecules/EmailIcon";
import { GithubIcon } from "../molecules/GithubIcon";
import { IconWrapper } from "../molecules/IconWrapper";
import { TwitterIcon } from "../molecules/TwitterIcon";
import Image from "next/image";
import Link from "next/link";

import { SAKE_IMAGE } from "../../utils/constants";

type Props = {
}

export const ProfileCard: React.VFC<Props> = () => {
  return (
    <>
  <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
  <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
	<div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
	

		<div className="p-4 md:p-12 text-center lg:text-left">
			<div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>
			
			<h1 className="text-3xl font-bold pt-8 lg:pt-0">Yuichiro Mori</h1>
			<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <div className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" /></svg>
                Graduated stundent at <br />Tokyo Institute of Technology
              </div>
              <div className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" /></svg>
                <a href="https://www.google.co.jp/maps/place/%E6%9D%B1%E4%BA%AC%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6+%E3%81%99%E3%81%9A%E3%81%8B%E3%81%91%E5%8F%B0%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9/@35.51438,139.4838937,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f531c8956e75:0xad027204cc33e6f9!8m2!3d35.51438!4d139.4838937!16s%2Fm%2F0ctww6v">Location - 35.51438° N, 139.4838° E</a>
              </div>
			<div className="pt-12 pb-8">
				<button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
          <Link href={"/about"} legacyBehavior>
				    <a>More Details</a>
          </Link>
				</button> 
			</div>

      <ul className="flex flex-row mt-4 space-x-2">
        <IconWrapper href="https://github.com/zaemon1251-hesty" name="github">
          <GithubIcon />
        </IconWrapper>
        <IconWrapper href="https://twitter.com/CatEmperorTime" name="twitter">
          <TwitterIcon />
        </IconWrapper>
        <IconWrapper href="mailto:hisakawa1251&#64;gmail.com" name="email">
          <EmailIcon />
        </IconWrapper>
      </ul>
			
		</div>

	</div>
	
	<div className="w-full lg:w-2/5">
		<Image 
        alt=""
        src={SAKE_IMAGE} 
        className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        width="300"
        height="450"
        />
	</div>
</div>
</div>
</>


  )
}
