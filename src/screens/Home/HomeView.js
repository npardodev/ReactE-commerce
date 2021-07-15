import React from 'react'
import { Home } from '../../components/Home/Home.js';
import { HomeBanner } from '../Home/HomeBanner.js';


export const HomeView = () => {
    
    return (
        <>
        <Home 
        title="BaluTech" 
        subtitle="Todo lo que buscas en tecnologia"
        slogan="en un solo lugar..." 
        buttonLabel="Conocenos"
        />
        <HomeBanner/>
        </>
    )
}

