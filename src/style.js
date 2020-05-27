import styled, { css } from "styled-components";
import {CheckboxWrapper} from "./components/Checkbox/Style";

export const Container = styled.div`
padding: 15px 15px 71px;
`;
export const InputWrapper = styled.div`
  position: relative;
  margin: 20px 0;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #999999;
  position: absolute;
  pointer-events: none;
  top: 18px;
  left: 19px;
  transition: all 0.2s ease;
  opacity: 0.5;
  display: flex;
  align-items: center;
  
  img {
    width: 10px;
    height: 16px;
    margin-right: 7px;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  height: 50px;
  border: 1px solid #c7c7c7;
  font-size: 14px;
  font-weight: 600;
  color: #212121;
  width: 100%;

  &:focus,
  &:active {
    outline: 0;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    opacity: 1;
    transform: scale(0.75) translateY(-240%) translateX(-30px);
    font-size: 12px;
    font-weight: 600;
    background-color: white;
  }

  /* For IE Browsers*/
  &:focus + ${Label}, &:not(:-ms-input-placeholder) + ${Label} {
    opacity: 1;
    transform: scale(0.9) translateY(-100%) translateX(-30px);
    background-color: white;
  }
  
  ${props =>
    props.hasValid &&
    css`
        border: 1px solid #008641;
        
          &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
             color: #008641;
          }
  `}

  &:focus,
  &:active,
  &:enabled {
    ${props =>
    props.hasError &&
    css`
        border: 1px solid #ff4242;
        
          &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
             color: #ff4242;
          }
        `}
  }
`;

export const ErrorMessage = styled.p`
  display: block;
`;

export const Button = styled.button`
  border-radius: 4px;
  border: none;
  background-color: #008641;
  height: 50px;
  width: 100%;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export const ErrorIcon = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: #ff4242;
  justify-items: center;
  align-items: center;
  position: absolute;
    right: 15px;
    top: 17px;

  svg {
    color: #ffffff;
    display: flex;
  }
`;

export const ValidIcon = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: #008641;
  justify-items: center;
  align-items: center;
  position: absolute;
    right: 15px;
    top: 17px;
`;

export const Wrapper = styled.div`
  display:flex;
    ${CheckboxWrapper}{
      &:first-child{
         margin-right: 9px;
    }
    }
`;
