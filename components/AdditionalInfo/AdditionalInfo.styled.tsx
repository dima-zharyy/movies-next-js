import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div``;

export const Subtitle = styled.h2`
  margin-bottom: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;

  color: #fff;
  background-color: #254e5886;
  text-decoration: none;

  border-radius: 4px;
  transition: all 250ms linear;

  &.active {
    background-color: #254e58;
    pointer-events: none;
  }

  :hover:not(.active) {
    background-color: #254e58;
  }
`;
