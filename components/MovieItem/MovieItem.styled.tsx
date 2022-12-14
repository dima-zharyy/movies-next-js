import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Movie = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: #000;
  text-decoration: none;
`;

export const Poster = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Title = styled.p`
  padding: 10px;

  font-weight: bold;
`;
