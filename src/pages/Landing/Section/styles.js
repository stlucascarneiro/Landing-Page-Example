import styled from 'styled-components'
import bgImage from 'assets/background/bg1.jpg'

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    position: relative;
    top: -2px;
    background-image: ${`url(${bgImage})`};
    background-size: cover;
    background-position: center;
    z-index: -3;

    @media (min-width: 2560px) and (max-height: 1080px) {
        background-size: 100% auto;
    }
    @media (max-width: 2560px) and (min-height: 1080px){
        background-size: auto 100%;
    }
    @media (min-width: 2560px) and (min-height: 1080px){
        background-size: 100% 100%;
    }
`
export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background-color: rgba(22, 29, 49, 0.8);
`
export const InnerContainer = styled.div`
    width:100%;
    max-width: 1280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.device.id <= 3 && '0 8px'};
    padding-top: 6rem;
    z-index: 1;
`
export const Title = styled.h2`
    font-weight: bold;
    text-align: center;
    color: white;
    
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
    width: 100%;
    max-width: 600px;
    font-weight: ${({ note }) => note ? '400' : '500'};
    line-height: 26px;
    text-align: center;
    color: ${({ theme, note }) => note ? theme.colors.text.strong : '#B9BFCE'};
    margin-bottom: 0;

    font-size: ${({ theme, note }) => {
        if (note && theme.device.id > 3) return '15px'
        if (note && theme.device.id <= 3) return '13px'
        if (theme.device.id > 3) return '18px';
        if (theme.device.id === 3) return '16px';
        if (theme.device.id < 3) return '16px';
    }};
`

export const NoteContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: ${({ theme }) => {
        if (theme.device.id > 4) return '240px'
        if (theme.device.id === 4) return '380px'
        if (theme.device.id === 3) return '240px'
        if (theme.device.id <= 2) return '260px'
    }};
    justify-content: ${({ theme }) => theme.device.id <= 3 ? 'flex-start' : 'center'};
    margin: 2rem 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 2rem;
`
export const Note = styled.div`
    width: 100%;
    min-width: ${({ theme }) => {
        if (theme.device.id > 4) return '380px'
        if (theme.device.id === 4) return '240px'
        if (theme.device.id === 3) return '300px'
        if (theme.device.id <= 2) return '260px'
    }};
    height: ${({ theme }) => {
        if (theme.device.id > 4) return '240px'
        if (theme.device.id === 4) return '380px'
        if (theme.device.id === 3) return '240px'
        if (theme.device.id <= 2) return '240px'
    }};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.mode === 'light' ? 'rgba(255, 255, 255, 0.90)' : 'rgba(22, 29, 49, 0.80)'};
    border-radius: 4px;
    padding: 0 8px;
    margin: ${({ theme }) => theme.device.id <= 3 ? '0 0.5rem' : '0 1rem'};
`

export const Strong = styled.strong`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.brand.light};
`

export const LeftArrow = styled(MdKeyboardArrowLeft)`
    font-size: 26px;
`
export const RightArrow = styled(MdKeyboardArrowRight)`
    font-size: 26px;
`