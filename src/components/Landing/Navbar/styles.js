import styled from 'styled-components'
import { screen } from 'config/screen';

import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { GrList } from "react-icons/gr";
import { BiTargetLock } from "react-icons/bi";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    z-index: 3;
    border-bottom: ${({ scrolled, theme }) => scrolled ? `1px solid ${theme.colors.text.lighter}` : 'none'};
`

export const InnerContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${screen.below.desktop_sm} {
        padding: 0 1rem;
    }
    @media ${screen.below.mobile} {
        padding: 0 8px;
    }
`

export const LogoContainer = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const Logo = styled.img`
    width: 46px;
    height: 41px;
`
export const Brand = styled.h2`
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.text.strong};
`
export const Slogan = styled.h3`
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #B946F0;
`

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
`
export const Navigator = styled.button`
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.text.default};
    margin-right: 1rem;
    transition: .3s;

    &:hover{
        color: ${({ theme }) => theme.colors.text.strong};
        transition: .3s;
    }
`

export const LightIcon = styled(FiSun)`
    @media ${screen.below.desktop_sm} {
        width: 16px;
        height: 16px;
    }
`
export const DarkIcon = styled(FiMoon)`
    @media ${screen.below.desktop_sm} {
        width: 16px;
        height: 16px;
    }
`
export const MenuIcon = styled(BiMenu)`
    color: ${({ theme }) => theme.colors.text.strong};
    font-size: 32px;
`
export const HomeIcon = styled(BiHome)`
    width: 16px;
    height: 16px;
`
export const PlatformIcon = styled(RiDashboardLine)`
    width: 16px;
    height: 16px;
`
export const SuggestionsIcon = styled(GrList)`
    width: 16px;
    height: 16px;
`
export const ObjectivesIcon = styled(BiTargetLock)`
    width: 16px;
    height: 16px;
`
export const LoginIcon = styled(BiLogIn)`
    width: 16px;
    height: 16px;
`