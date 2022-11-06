import { useRouter } from "next/router";
import { useCallback } from "react";
import {
  StyledLink,
  Container,
  Navigation,
  Subtitle,
} from "./AdditionalInfo.styled";

export const AdditionalInfo: React.FC = () => {
  const router = useRouter();

  const handleLinkClick = useCallback(
    (path: string): void => {
      if (router.query.slug) {
        router.replace(`${router.query?.slug[0]}/${path}`, undefined, {
          scroll: false,
          shallow: true,
        });
      }
    },
    [router]
  );

  let castActive = "";
  let reviewsActive = "";

  if (router.query.slug) {
    castActive = router.query.slug[1] === "cast" ? "active" : "";
    reviewsActive = router.query?.slug[1] === "reviews" ? "active" : "";
  }

  return (
    <Container>
      <Subtitle>Additional Information</Subtitle>
      <Navigation>
        <StyledLink
          className={castActive}
          type="button"
          onClick={() => handleLinkClick("cast")}
        >
          Cast
        </StyledLink>
        <StyledLink
          className={reviewsActive}
          type="button"
          onClick={() => handleLinkClick("reviews")}
        >
          Reviews
        </StyledLink>
      </Navigation>
    </Container>
  );
};
