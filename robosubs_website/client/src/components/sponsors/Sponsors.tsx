import React, {useReducer, useRef} from 'react'
import Navbar from "../navbar/Navbar.tsx";
import Footer from "../footer/Footer.tsx";
import sponsorsList from "../sponsors/sponsors_list.ts";


interface Props {
    SponsorImage: string,
    SponsorWebsite: string
}
const SponsorCards: React.FC<Props> = ({
   SponsorImage,
   SponsorWebsite
}) => {

    // React code goes here
    return (
        <>
            <div className='sponsor_cards'>
                <a target="_blank" href={SponsorWebsite}><img id='Sponsor_Image' src={SponsorImage}/></a>
            </div>
        </>
    )
}

const Sponsors: React.FC = () => {


    return (
      <>
        <Navbar/>
          <div className='Sponsors_page'>
              <h1 className='title'>Sponsors</h1>
                <div className='Only_Cards' >
                    {
                        sponsorsList.map((val) => {
                            console.log(val.Name)
                            if (val.Status === "Current") {
                                return (
                                    <SponsorCards SponsorImage={val.SponsorImage } SponsorWebsite={val.SponsorWebsite}/>
                                )
                            }
                        })
                    }
                </div>
          </div>
        <Footer/>
      </>
  )
}

export default Sponsors