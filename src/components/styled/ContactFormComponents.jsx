import styled from "styled-components";

export const FormContainer = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0A2B59;
  padding: 74px 230px;
  border-radius: 10px;
  width: 100%;
  gap: 18px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    padding: 100px 120px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    padding: 100px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    padding: 100px 64px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    padding: 100px 40px;
  }
`;

export const FormTitle = styled.h2`
  margin: 0;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.75rem;
  text-align: center;
  color: #fff;
  margin-bottom: 14px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    font-size: ${props => props.theme.fontSizes['xxxxxl']};
    line-height: 4rem;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 1100px;
`

export const InputLabel = styled.label`
  color: #fff;
  font-size: ${props => props.theme.fontSizes['md']};
  font-weight: 700;
`;

export const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  color: #FFF;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: ${props => props.theme.fontSizes['md']};
  font-weight: 400;
  transition: border 0.1s;

  &::placeholder {
    color: #757575;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid #B3B3B3;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: ${props => props.theme.fontSizes['md']};
  font-weight: 400;
  transition: border 0.1s;

  &::placeholder {
    color: #757575;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid #B3B3B3;
  }
`;

export const SubmitButton = styled.button`
  padding: 16px 64px;
  background-color: #1051AB;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes['sm']};
  font-weight: 600;
  margin-top: 48px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #15407c;
  }
  &:disabled {
    background-color: #0a2d5e;
    cursor: not-allowed;
  }
`;

export const ErrorSpan = styled.span`
  color: #FF6347;
  font-size: ${props => props.theme.fontSizes['sm']};
  font-weight: 500;
`