import React from 'react'
import { CustomBanner} from '../CustomComponents/CustomBanner.js'
import bannerNosotros from '../../assets/img/banners/BannerNosotros.png'

export const AboutUsBanner = () => {
    
      return (<>
        <CustomBanner img={bannerNosotros} alt="Imagen banner Nosotros"/>
   </>)
}

