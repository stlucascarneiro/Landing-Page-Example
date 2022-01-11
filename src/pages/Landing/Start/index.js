import React, { useContext } from 'react'
// Config
import { GlobalContext } from 'context';
import { ThemeProvider } from 'styled-components';
// Components
import { Button } from '@chakra-ui/react'
import { Container, InnerContainer, Title, Caption, Paragraph, ButtonContainer, AnchorContainer, ContactContainer, ContactItem, Anchor, Facebook, Instagram, Whatsapp, Divider } from './styles';
// Assets

const Start = () => {
    const { device, theme } = useContext(GlobalContext)
    return (
        <ThemeProvider theme={{ ...theme, device }}>
            <Container id='Start'>
                <InnerContainer>
                    <Title>Info para enriquecer</Title>
                    <Caption>seu negócio online</Caption>
                    <Paragraph fontSize='20px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>
                    <ButtonContainer>
                        <Button
                            variant='primary'
                            fontSize={theme.fontSizes.xl}
                            h={device.id <= 3 ? '46px' : '62px'}
                            p={device.id <= 3 ? '0 1.5rem' : '0 2.5rem'}>Crie sua conta</Button>
                        <Button
                            variant='secondary'
                            fontSize={theme.fontSizes.xl}
                            h={device.id <= 3 ? '46px' : '62px'}
                            p={device.id <= 3 ? '0 1.5rem' : '0 2.5rem'}>Faça Login</Button>
                    </ButtonContainer>
                    <AnchorContainer>
                        <Anchor><Whatsapp />Whatsapp</Anchor>
                        <Anchor><Facebook />Facebook</Anchor>
                        <Anchor><Instagram />Instagram</Anchor>
                    </AnchorContainer>
                    {device.id <= 3 && <Divider theme={{ ...theme, device }} />}
                    <ContactContainer>
                        <ContactItem>
                            <Anchor style={{ color: theme.colors.brand.default }}><Whatsapp style={{ marginLeft: '0' }} />Whatsapp</Anchor>
                            <Paragraph textAlign='start' contact>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Paragraph>
                            <Button variant='primary' h='32px' fontSize={theme.fontSizes.default}>Lorem ipsum</Button>
                        </ContactItem>
                        <ContactItem>
                            <Anchor style={{ color: theme.colors.brand.default }}><Facebook style={{ marginLeft: '0' }} />Facebook</Anchor>
                            <Paragraph textAlign='start' contact>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Paragraph>
                            <Button variant='primary' h='32px' fontSize={theme.fontSizes.default}>Lorem ipsum</Button>
                        </ContactItem>
                        <ContactItem>
                            <Anchor style={{ color: theme.colors.brand.default }}><Instagram style={{ marginLeft: '0' }} />Instagram</Anchor>
                            <Paragraph textAlign='start' contact>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Paragraph>
                            <Button variant='primary' h='32px' fontSize={theme.fontSizes.default}>Lorem ipsum</Button>
                        </ContactItem>
                    </ContactContainer>
                </InnerContainer>
            </Container>
        </ThemeProvider>
    );
}

export default Start;