import React from 'react'
import Header from './components/Header/Header'
import Router from './router/Router'
import Footer from './components/Footer/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    )
}

export default Layout