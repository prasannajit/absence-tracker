import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const StyledParagraph = styled.p`
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
    color: #575d64;
    margin: 0;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const StyledImg = styled.img`
    margin-bottom: 16px;
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
  & :hover{
    background: #e5e9ed;
  }
`;

export const StyledH1 = styled.h1`
    font-size: 40px;
    margin-bottom: 16px;
    margin-top: 20px;
`;