import App from 'next/app'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import Theme from '../styles/theme1/'



export default class MyApp extends App {
    render(){
        const {Component, pageProps} = this.props

        return(
            <ThemeProvider theme={Theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}

