import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout(props) {
    return(
        <>
            <Header/>
            <main  className=" container">
                {props.children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout