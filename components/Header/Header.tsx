import { Menu, StyledLink, Navigation } from "./Header.styled";
import { useRouter } from "next/router";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <Menu>
      <Navigation>
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/movies">Movies</StyledLink>
      </Navigation>
    </Menu>
  );
};
