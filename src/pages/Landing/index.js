import React, { useContext, useRef } from 'react'
// Config
import { GlobalContext } from 'context'
// Components
import Navbar from 'components/Landing/Navbar'
import Start from './Start'
import Platform from './Section'
import Posts from './Posts'
import Objectives from './Objectives'
import { Divider } from './styles'
// Assets

const Index = () => {
    const { device, theme } = useContext(GlobalContext)
    const startPage = useRef(null)
    const platformPage = useRef(null)
    const suggestionsPage = useRef(null)
    const generatorPage = useRef(null)
    return (
        <>
            <div ref={startPage} style={{ position: 'absolute', top: '-80px' }}></div>
            <Navbar pages={{ startPage, platformPage, suggestionsPage, generatorPage }} />
            {device.id > 3 && <Divider theme={{ ...theme, device }} />}
            <Start />
            <div ref={platformPage} />
            <Platform />
            <div ref={suggestionsPage} style={{ position: 'relative', top: '-60px' }} />
            <Posts />
            <div ref={generatorPage} style={{ position: 'relative', top: '-60px' }} />
            <Objectives />
        </>
    );
}

export default Index;