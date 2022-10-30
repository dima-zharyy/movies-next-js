import { Menu, StyledLink, List } from "./Header.styled";
import { useRouter } from "next/router";

const links = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "Movies",
    href: "/movies",
  },
];

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  const navList = (
    <List>
      {links.map(({ id, text, href }) => {
        return (
          <li key={id}>
            <StyledLink
              href={href}
              style={{
                borderBottom: pathname === href ? "2px solid #f4f74b" : "none",
              }}
            >
              {text}
            </StyledLink>
          </li>
        );
      })}
    </List>
  );

  return (
    <Menu>
      <nav>{navList}</nav>
    </Menu>
  );
};
