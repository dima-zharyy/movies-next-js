import styled from "@emotion/styled";

export const Form = styled.form`
  position: fixed;
  top: 12px;
  left: 50%;
  z-index: 15;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  color: #254e58;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input<{ autocomplete: string }>`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
