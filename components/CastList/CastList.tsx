// import {
//   List,
//   Profile,
//   Name,
//   Character,
//   Item,
//   Container,
// } from "./CastList.styled";
// import PropTypes from "prop-types";
export const AAA = () => {
  return <AAA></AAA>;
};
// export const CastList = ({ castInfo }) => {
//   const imgUrl = `https://image.tmdb.org/t/p/w500/`;
//   const imgPlaceholder = `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;

//   if (castInfo && castInfo.length === 0) {
//     return (
//       <Container>
//         <h3>There is no cast info on the movie</h3>
//       </Container>
//     );
//   }

//   return (
//     <Container>
//     <List>
//       {castInfo &&
//         castInfo.map(({ id, profile_path, name, character }) => {
//           return (
//             <Item key={id}>
//               {profile_path ? (
//                 <Profile src={`${imgUrl}/${profile_path}`} alt={`${name}`} />
//               ) : (
//                 <Profile src={`${imgPlaceholder}`} alt="no image available" />
//               )}
//               <div>
//                 <Name>{name}</Name>
//                 <Character>{`Character: ${character}`}</Character>
//               </div>
//             </Item>
//           );
//         })}
//     </List></Container>
//   );
// };

// CastList.propTypes = {
//   castInfo: PropTypes.arrayOf(PropTypes.object),
// };
