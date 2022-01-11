import styled from "styled-components";

export const Divider = styled.div`
    width: ${({ theme }) => theme.device.id <= 3 ? '100%' : 'calc(100% - 4rem)'};
    height: 1px;
    position: ${({ theme }) => theme.device.id <= 3 ? 'unset' : 'absolute'};
    top: ${({ theme }) => theme.device.id <= 3 ? '600px' : '800px'};
    left: ${({ theme }) => theme.device.id <= 3 ? '1rem' : '2rem'};
    border-top: ${({ theme }) => `1px solid ${theme.colors.text.lighter}`};
    margin-top: ${({ theme }) => theme.device.id <= 3 ? '6rem' : '0'};
`