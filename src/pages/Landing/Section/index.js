import React, { useContext, useState } from 'react'
// Config
import { GlobalContext } from 'context';
import { ThemeProvider } from 'styled-components';
// Components
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Container, Overlay, InnerContainer, Title, Caption, Paragraph, NoteContainer, Note, Strong, LeftArrow, RightArrow } from './styles';
// Assets

const modalTexts = [
    {
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'At vero eos et accusamus',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.'
    },
    {
        title: 'Excepteur sint occaecat',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
]

const Platform = () => {
    const { device, theme } = useContext(GlobalContext)
    const [openModal, setOpenModal] = useState(false);
    const [modalPage, setModalPage] = useState(1);
    const radioValue = String(modalPage)
    return (
        <ThemeProvider theme={{ ...theme, device }}>
            <Container >
                <InnerContainer id='Platform'>
                    <Title>Uma seção para</Title>
                    <Caption>você utilizar</Caption>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:</Paragraph>
                    <NoteContainer>
                        <Note>
                            <Paragraph note>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <Strong>accusantium</Strong> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore <Strong>veritatis et quasi</Strong>  architecto beatae vitae dicta sunt explicabo.</Paragraph>
                        </Note>
                        <Note>
                            <Paragraph note>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores <Strong>eos qui ratione</Strong> voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</Paragraph>
                        </Note>
                        <Note>
                            <Paragraph note>Ut enim ad minima veniam, quis nostrum exercitationem ullam<Strong>corporis</Strong> suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum <Strong>iure</Strong> reprehenderit qui in ea voluptate velit esse quam.</Paragraph>
                        </Note>
                    </NoteContainer>
                    <Paragraph>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</Paragraph>
                    <div style={{ height: '3rem' }} />
                    <Button variant='primary' minH="40px" onClick={() => { setOpenModal(true) }}>Lorem ipsum dolor sit amet</Button>
                    <div style={{ height: '6rem' }} />
                </InnerContainer>
                <Modal blockScrollOnMount={false} isOpen={openModal} onClose={() => { setOpenModal(false) }} isCentered>
                    <ModalOverlay />
                    <ModalContent bg='bg.primary'>
                        <ModalHeader color='text.strong'>{modalTexts[modalPage - 1].title}</ModalHeader>
                        <ModalCloseButton color='text.strong' />
                        <ModalBody color='text.default'>
                            {modalTexts[modalPage - 1].text}
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                variant='outlined'
                                color='text.default'
                                fontSize='4xl'
                                mr={3}
                                onClick={() => {
                                    if (modalPage > 1) setModalPage(modalPage - 1)
                                }}>
                                <LeftArrow />
                            </Button>
                            <RadioGroup onChange={setModalPage} value={radioValue}>
                                <Stack direction='row'>
                                    <Radio value='1' colorScheme='purple'></Radio>
                                    <Radio value='2' colorScheme='purple'></Radio>
                                    <Radio value='3' colorScheme='purple'></Radio>
                                </Stack>
                            </RadioGroup>
                            <Button
                                variant='outlined'
                                color='text.default'
                                fontSize='4xl'
                                ml={3}
                                onClick={() => {
                                    if (modalPage < 3) setModalPage(modalPage + 1)
                                }}>
                                <RightArrow />
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Overlay />
            </Container>
        </ThemeProvider>
    );
}

export default Platform;