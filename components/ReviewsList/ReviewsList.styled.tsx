import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 30px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  border-color: #000;

  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Author = styled.h3`
  margin-bottom: 10px;
`;

export const Updated = styled.span`
  font-weight: normal;
  font-style: italic;
`;

export const Comment = styled.p`
  padding-left: 16px;
`;
