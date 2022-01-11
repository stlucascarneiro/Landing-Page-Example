import styled from "styled-components";

import { AiOutlineHeart } from "react-icons/ai";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    padding-top: ${({ theme }) => theme.device.id <= 3 ? '4rem' : '6rem'};
    box-shadow: ${({ theme }) => `0 0 4px 4px ${theme.colors.bg.primary}`};
    z-index: 2;
    position: relative;
    top: -2px;
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
        if (theme.device.id > 3) return '54px';
        if (theme.device.id === 3) return '32px';
        if (theme.device.id === 2) return '24px';
        if (theme.device.id === 1) return '20px';
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
    color: ${({ theme }) => theme.colors.text.default};

    font-size: ${({ theme }) => {
        if (theme.device.id > 3) return '16px';
        if (theme.device.id === 3) return '15px';
        if (theme.device.id < 3) return '14px';
    }};
`

export const ExampleContainer = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
`

export const BackgroundFrame = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 30px);
    width: ${({ theme }) => theme.device.id <= 2 ? 'calc(100% - 12px)' : 'calc(100% - 30px)'};
    background-color: rgba(98, 78, 227, 0.25);
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0, 0.5);
    position: absolute;
    top: 0;
`

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

export const Item = styled.div`
    width: ${({ theme }) => theme.device.id <= 2 ? 'calc(100% - 12px)' : 'calc(100% - 30px)'};
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    color: white;
    padding: 0.5rem 0 0.5rem 3rem;
    border-radius: 4px;
    position: relative;
    margin-top: ${({ theme }) => theme.device.id <= 2 ? '12px' : '30px'};
    margin-left: ${({ theme }) => theme.device.id <= 2 ? '12px' : '30px'};
    box-shadow: 0 4px 6px 2px rgba(0,0,0, 0.5);
    cursor: pointer;
`

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    background-color: #DEDEE1;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    left: 8px;
`
export const Username = styled.span`
    font-weight: 300;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.strong};
`
export const TimeStamp = styled.span`
    font-weight: normal;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text.light};
    margin-left: 1rem;
`
export const Content = styled.p`
    width: calc(100% - 16px);
    font-weight: normal;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.strong};
    margin: 4px 0;
    max-width: 520px;
`
export const Genre = styled.span`
    display: flex;
    font-weight: normal;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text.light};
`
export const Favorites = styled.span`
    
`
export const FavoriteIcon = styled(AiOutlineHeart)`
    font-size: 12px;
    margin-left: 1rem;
    margin-right: 4px;
    position: relative;
    top: 2px;
`