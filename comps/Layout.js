import React from 'react'
import Head from 'next/head'
import Footer from './globalComps/Footer/Footer'
import Navbar from './globalComps/Navbar/Navbar'

export default function Layout(props) {
    return (
        < >
             <Head>
                <title>Rxedu.online</title>
                <meta name="Rxedu.online" content="Created by Eligbue Felix" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            <Navbar />
            {props.children}    
            <Footer/> 
        </>
    )
}
