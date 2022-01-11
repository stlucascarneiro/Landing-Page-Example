import React, { useCallback, useContext, useEffect, useState } from 'react'
// Config
import { GlobalContext } from 'context';
import { ThemeProvider } from 'styled-components';
// Components
import { Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react'
import { Container, InnerContainer, LogoContainer, Logo, Brand, Slogan, NavigationContainer, Navigator, LightIcon, DarkIcon, MenuIcon, HomeIcon, PlatformIcon, SuggestionsIcon, ObjectivesIcon, LoginIcon } from './styles';
// Assets
import logo from 'assets/logo/logo.png';

const Navbar = ({ pages }) => {
    const [scrolled, setScrolled] = useState(false);
    const { device, theme, setTheme } = useContext(GlobalContext)

    const executeScroll = (page) => pages[page].current.scrollIntoView()

    const handleScroll = useCallback(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollValue = winScroll / height
        if (scrollValue > 0.015 && !scrolled) {
            setScrolled(true)
        } else if (scrollValue <= 0.015) {
            setScrolled(false)
        }
    }, [scrolled])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [handleScroll]);

    return (
        <ThemeProvider theme={{ ...theme, device }}>
            <Container scrolled={scrolled} >
                <InnerContainer>
                    <LogoContainer>
                        <Logo src={logo} />
                        <div>
                            <Brand>Sua Marca</Brand>
                            <Slogan>SEU SLOGAN</Slogan>
                        </div>
                    </LogoContainer>
                    {device.id > 3 && <NavigationContainer>
                        <Navigator onClick={() => executeScroll('startPage')}>Início</Navigator>
                        <Navigator onClick={() => executeScroll('platformPage')}>Seção</Navigator>
                        <Navigator onClick={() => executeScroll('suggestionsPage')}>Publicações</Navigator>
                        <Navigator onClick={() => executeScroll('generatorPage')}>Objetivos</Navigator>
                        <Button variant='secondary'>Entrar</Button>
                        <div style={{ width: '16px' }} />
                        <Button
                            variant='secondary'
                            onClick={() => theme.mode === 'light' ? setTheme('dark') : setTheme('light')}>
                            {theme.mode === 'light' ? <DarkIcon /> : <LightIcon />}
                        </Button>
                    </NavigationContainer>}
                    {device.id <= 3 &&
                        <Menu>
                            <MenuButton>
                                <MenuIcon />
                            </MenuButton>
                            <MenuList>
                                <MenuItem icon={<HomeIcon />} onClick={() => executeScroll('startPage')}>
                                    Início
                                </MenuItem>
                                <MenuItem icon={<PlatformIcon />} onClick={() => executeScroll('platformPage')}>
                                    Seção
                                </MenuItem>
                                <MenuItem icon={<SuggestionsIcon />} onClick={() => executeScroll('suggestionsPage')}>
                                    Publicações
                                </MenuItem>
                                <MenuItem icon={<ObjectivesIcon />} onClick={() => executeScroll('generatorPage')}>
                                    Objetivos
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem
                                    icon={theme.mode === 'light' ? <DarkIcon /> : <LightIcon />}
                                    onClick={() => theme.mode === 'light' ? setTheme('dark') : setTheme('light')}>
                                    {theme.mode === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
                                </MenuItem>
                                <MenuItem icon={<LoginIcon />}>
                                    Entrar
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    }
                </InnerContainer>
            </Container>
        </ThemeProvider>
    );
}

export default Navbar;