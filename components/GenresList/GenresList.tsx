import { List, Text, Item } from "./GenresList.styled";

type TGenresProps = {
  genres: { id: number; name: string }[];
};

export const GenresList: React.FC<TGenresProps> = ({ genres }) => {
  return (
    <List>
      {genres.length > 0
        ? genres.map(({ id, name }) => {
            return (
              <Item key={id}>
                <Text>{name}</Text>
              </Item>
            );
          })
        : `Sorry! There is no genres data`}
    </List>
  );
};
