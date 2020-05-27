import styled from "styled-components";

export const CheckboxWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 44px;
    border-radius: 4px;
    border: 2px solid #eaeaea;    
    background-color: #fdfdfd;
`;

export const InputCheck = styled.span`
`;

export const FormIcon = styled.div`
  display: none;
`;

export const CheckboxLabel = styled.label`
    font-size: 12px;
    font-weight: 500;
    align-items: center;
    color: #212121;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const FormCheckbox = styled.input`

  & ~ ${InputCheck} {
    width: 16px;
    height: 16px;
    display: inline-block;
    border-radius: 2px;
    margin-right: 5px;
    border: 1px solid #979797;
  }
  
  &:checked ~ ${InputCheck} ${FormIcon} {
    width: 19px;
    height: 19px;
    border-radius: 2px;
    display: block;
  }
`;
