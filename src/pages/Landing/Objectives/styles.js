import styled from "styled-components";

import bgImage from "assets/background/bg2.jpg";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    background-image: ${`url(${bgImage})`};
    background-size: cover;
    background-position: center;
    padding-top: ${({ theme }) => theme.device.id <= 3 ? '4rem' : '6rem'};
    box-shadow: ${({ theme }) => `0 0 4px 4px ${theme.colors.bg.primary}`};
    z-index: -3;
    position: relative;
    top: -2px;
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
    z-index: 1;
`
export const Title = styled.h2`
    font-weight: bold;
    text-align: center;
    color: white;
    
    font-size: ${({ theme }) => {
        if (theme.device.id > 3) return '54px';
        if (theme.device.id === 3) return '32px';
        if (theme.device.id === 2) return '24px';
        if (theme.device.id === 1) return '24px';
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
        if (theme.device.id === 3) return '30px';
        if (theme.device.id === 2) return '24px';
        if (theme.device.id === 1) return '20px';
    }};
`
export const Paragraph = styled.p`
    width: '100%';
    max-width: 600px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
    color: #B9BFCE;

    font-size: ${({ theme }) => {
        if (theme.device.id > 3) return '16px';
        if (theme.device.id === 3) return '15px';
        if (theme.device.id < 3) return '14px';
    }};
`

export const ExampleContainer = styled.div`
    width: 100%;
    max-width: 802px;
    height: 100%;
    display: flex;
    justify-content: ${({ theme }) => theme.device.id <= 3 ? 'flex-start' : 'space-between'};
    position: relative;
    margin: 2rem 0;
    padding: 0 0.25rem 2rem 0.25rem;
    overflow-x: auto;
`

export const GeneratorContainer = styled.div`
    width: 246px;
    min-width: 246px;
    height: 316px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: ${({ theme }) => theme.device.id <= 3 ? '1rem' : '0'};
`

export const BackgroundFrame = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    background-color: rgba(98, 78, 227, 0.25);
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0, 0.5);
    position: absolute;
    top: 0;
`

export const Item = styled.div`
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    color: white;
    border-radius: 4px;
    position: relative;
    margin-top: 16px;
    margin-left: 16px;
    box-shadow: 0 4px 6px 2px rgba(0,0,0, 0.5);
    cursor: pointer;
    user-select: none;
`

export const GenTitle = styled.span`
    font-weight: 500;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text.strong};
    text-align: center;
`
export const Label = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.light};
    margin-left: 0.5rem;
`
export const Value = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.strong};
`