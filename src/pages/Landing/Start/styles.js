import styled from "styled-components";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    margin-top: 80px;
    padding-top: ${({ theme }) => theme.device.id <= 3 ? '4rem' : '6rem'};
    box-shadow: ${({ theme }) => `0 0px 4px 4px ${theme.colors.bg.primary}`};
    z-index: 2;
`
export const InnerContainer = styled.div`
    width:100%;
    max-width: 1280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.device.id <= 3 && '0 8px'};
`
export const Title = styled.h2`
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.colors.text.strong};
    
    font-size: ${({ theme }) => {
        if (theme.device.id > 3) return '64px';
        if (theme.device.id === 3) return '40px';
        if (theme.device.id < 3) return '30px';
    }};
`
export const Caption = styled.h2`
    font-weight: bold;
    text-align: center;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.brand.default};
    margin-bottom: ${({ theme }) => theme.device.id <= 3 ? '2rem' : '3rem'};

    font-size: ${({ theme }) => {
        if (theme.device.id > 3) return '50px';
        if (theme.device.id === 3) return '36px';
        if (theme.device.id < 3) return '26px';
    }};
`
export const Paragraph = styled.p`
    width: ${({ contact }) => contact ? '220px' : '100%'};
    max-width: ${({ contact }) => contact ? '260px' : '600px'};
    font-weight: 500;
    line-height: 26px;
    text-align: ${({ textAlign }) => textAlign ? textAlign : 'center'};
    color: ${({ theme }) => theme.colors.text.default};
    margin-bottom: ${({ contact }) => contact ? '1rem' : '0'};

    font-size: ${({ theme, fontSize, contact }) => {
        if (contact) return '14px'
        if (theme.device.id > 3) return fontSize ? fontSize : '18px';
        if (theme.device.id === 3) return '16px';
        if (theme.device.id < 3) return '16px';
    }};
`
export const ButtonContainer = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 3rem;
`
export const AnchorContainer = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-evenly;
    margin-top: ${({ theme }) => theme.device.id <= 3 ? '4rem' : '6rem'};
`
export const ContactContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: ${({ theme }) => theme.device.id <= 3 ? 'flex-start' : 'space-evenly'};
    margin-top: ${({ theme }) => theme.device.id <= 3 ? '3rem' : '17rem'};
    padding-left: ${({ theme }) => theme.device.id <= 3 ? '0.5rem' : '0'};
    overflow-x: ${({ theme }) => theme.device.id <= 3 ? 'scroll' : 'hidden'};
    margin-bottom: 4rem;
    padding-bottom: 2rem;
`
export const ContactItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: ${({ theme }) => {
        if (theme.device.id === 3) return '2rem'
        if (theme.device.id < 3) return '1rem'
    }};
`
export const Anchor = styled.button`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 26px;
    color: ${({ theme }) => theme.colors.text.default};
    transition: .3s;

    &:hover{
        color: ${({ theme }) => theme.colors.text.strong};
        transition: .3s;
    }
`

export const Divider = styled.div`
    width: ${({ theme }) => theme.device.id <= 3 ? '100%' : 'calc(100% - 4rem)'};
    height: 1px;
    position: ${({ theme }) => theme.device.id <= 3 ? 'unset' : 'absolute'};
    top: ${({ theme }) => theme.device.id <= 3 ? '600px' : '760px'};
    left: ${({ theme }) => theme.device.id <= 3 ? '1rem' : '2rem'};
    border-top: ${({ theme }) => `1px solid ${theme.colors.text.lighter}`};
    margin-top: ${({ theme }) => theme.device.id <= 3 ? '6rem' : '0'};
`

export const Facebook = styled(FaFacebookSquare)`
    font-size: 22px;
    margin-right: 0.5rem;
`
export const Instagram = styled(FaInstagram)`
    font-size: 22px;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
`
export const Whatsapp = styled(FaWhatsapp)`
    font-size: 22px;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
`