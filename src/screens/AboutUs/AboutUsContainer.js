import React from 'react'
import { makeStyles} from '@material-ui/core';
import ImgAboutUs from '../../assets/img/logo.png'
import { AboutUsContainerStyle } from './AboutUsContainerStyle'

const useStyles = makeStyles ((theme) => AboutUsContainerStyle(theme));

export const AboutUsContainer = () => {
  
  const classes = useStyles();

  return (
    <section>
        <div className= {classes.container}>
            <div>
                <img src={ImgAboutUs} alt='Imagen About Us'/>
            </div>
            <div className= {classes.aboutInfo}>
              <h2>Sobre Nosotros</h2>
              <p>Somos una empresa joven con ganas de crecer como referente en soluciones informáticas y de IT. </p>
              <p>Trabajamos con las principales marcas del mercado y brindamos asesoramiento técnico y comercial</p>
            </div>
        </div>
    </section>)
}

