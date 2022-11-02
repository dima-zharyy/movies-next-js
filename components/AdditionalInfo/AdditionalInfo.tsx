import { useRouter } from "next/router";
import {
  StyledLink,
  Container,
  Navigation,
  Subtitle,
} from "./AdditionalInfo.styled";

export const AdditionalInfo = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Container>
      <Subtitle>Additional Information</Subtitle>
      <Navigation>
        <StyledLink
          href={{
            pathname: "/movies/[id]/cast",
            query: { id: router.query.id },
          }}
        >
          Cast
        </StyledLink>
        <StyledLink href={`${router.pathname}/reviews`}>Reviews</StyledLink>
      </Navigation>
    </Container>
  );
};
