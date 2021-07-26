import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 85px;
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledH1 = styled.h1`
    padding-left: 0;
    @media (min-width: 768px) {
        padding-left: 12px;
        font-size: 40px;
    }
`;

export const StyledImg = styled.img`
    display: none;
    @media (min-width: 768px) {
        padding-top: 4px;
        display: block;
    }
`;

export const StyledParagraph = styled.p`
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    color: #575d64;
    margin: 0;
    text-align: center;
`;

export const StyledButton = styled.button`
    width: 160px;
    height: 40px;
    background: #edf1f4;
    border: 1px solid #e5e9ed;
    border-radius: 25px;
    margin: 25px 0 0 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #24272e;
    font-family: Poppins, Arial, sans-serif;
    cursor: pointer;
    &:hover{
        background: #e5e9ed;
    }
`;
