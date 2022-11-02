import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Profile = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Name = styled.p`
  padding: 5px;

  font-weight: bold;
  text-align: center;
`;

export const Character = styled.p`
  padding: 5px;

  font-style: italic;
  text-align: center;
`;

export const Container = styled.div`
  margin-top: 30px;
`;
