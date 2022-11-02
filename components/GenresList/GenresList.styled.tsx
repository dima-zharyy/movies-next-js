import styled from "@emotion/styled";

export const Text = styled.p`
  font-style: italic;
`;

export const Item = styled.li`
  padding: 4px 10px;

  :not(:last-child) {
    border-right: 1px solid #00000068;
  }
`;

export const List = styled.ul`
  display: flex;
  margin-bottom: 30px;
`;
