import {
  Container,
  List,
  Item,
  Author,
  Comment,
  Updated,
} from "./ReviewsList.styled";
import { TMovieReviews } from "../../service/apiTypes";

type TReviewsListProps = {
  reviews: TMovieReviews;
};

export const ReviewsList: React.FC<TReviewsListProps> = ({ reviews }) => {
  if (reviews && reviews.length === 0) {
    return (
      <Container>
        <h3>There are no reviews on the movie</h3>
      </Container>
    );
  }

  return (
    <Container>
      <List>
        {reviews &&
          reviews.map(({ id, author, updated_at, content }) => {
            return (
              <Item key={id}>
                <Author>
                  {author}{" "}
                  <Updated>{`- posted on ${new Date(
                    updated_at
                  ).toLocaleDateString()}`}</Updated>
                </Author>
                <Comment>{content}</Comment>
              </Item>
            );
          })}
      </List>
    </Container>
  );
};