import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout(props) {
    return(
        <>
            <Header user={props.user} />
            <main  className=" container">
                {props.children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout