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
        <StyledLink onClick={() => router.push(`${router.query.slug}/cast`)}>
          Cast
        </StyledLink>
        <StyledLink>Reviews</StyledLink>
      </Navigation>
    </Container>
  );
};
