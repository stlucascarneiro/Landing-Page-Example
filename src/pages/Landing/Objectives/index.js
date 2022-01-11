import React, { useContext, useState } from 'react'
// Config
import { GlobalContext } from 'context';
import { ThemeProvider } from 'styled-components';
// Components
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { Container, InnerContainer, Title, Caption, Paragraph, ExampleContainer, BackgroundFrame, GeneratorContainer, Item, GenTitle, Overlay, Label, Value } from './styles';
// Assets

const modalTexts = {
    title: 'Lorem ipsum dolor',
    text: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const Objectives = () => {
    const [openModal, setOpenModal] = useState(false);
    const { device, theme } = useContext(GlobalContext)
    return (
        <ThemeProvider theme={{ ...theme, device }}>
            <Container id='Generator'>
                <InnerContainer>
                    <Title>Que tal falar sobre</Title>
                    <Caption>objetivos e conquistas</Caption>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
                    <br />
                    <Paragraph>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</Paragraph>
                    <ExampleContainer>
                        <GeneratorContainer>
                            <BackgroundFrame />
                            <Item>
                                <GenTitle>Item</GenTitle>
                                <Label>Lorem:<Value> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</Value></Label>
                                <div style={{ height: '8px' }} />
                                <Label>Ipsum:<Value> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Value></Label>
                            </Item>
                        </GeneratorContainer>
                        <GeneratorContainer>
                            <BackgroundFrame />
                            <Item>
                                <GenTitle>Item</GenTitle>
                                <Label>Lorem:<Value> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</Value></Label>
                                <div style={{ height: '8px' }} />
                                <Label>Ipsum:<Value> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Value></Label>
                            </Item>
                        </GeneratorContainer>
                        <GeneratorContainer>
                            <BackgroundFrame />
                            <Item>
                                <GenTitle>Item</GenTitle>
                                <Label>Lorem:<Value> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</Value></Label>
                                <div style={{ height: '8px' }} />
                                <Label>Ipsum:<Value> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Value></Label>
                            </Item>
                        </GeneratorContainer>
                    </ExampleContainer>
                    <Paragraph>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</Paragraph><br />
                    <div style={{ height: '3rem' }} />
                    <Button variant='primary' minH="40px" onClick={() => { setOpenModal(true) }}>Saiba mais sobre</Button>
                    <div style={{ height: '6rem' }} />
                </InnerContainer>
                <Modal blockScrollOnMount={false} isOpen={openModal} onClose={() => { setOpenModal(false) }} isCentered>
                    <ModalOverlay />
                    <ModalContent bg='bg.primary'>
                        <ModalHeader color='text.strong'>{modalTexts.title}</ModalHeader>
                        <ModalCloseButton color='text.strong' />
                        <ModalBody color='text.default'>
                            {modalTexts.text}
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                variant='outlined'
                                color='text.default'
                                fontSize='md'
                                mr={3}
                                onClick={() => { setOpenModal(false) }}>
                                Fechar
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Overlay />
            </Container>
        </ThemeProvider>
    );
}

export default Objectives;