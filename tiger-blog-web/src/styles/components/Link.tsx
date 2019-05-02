import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  font-weight: 300;
  display: inline-block;
  padding: 0rem 0.3rem;
  transform: translateY(0.7rem);
  margin-left: 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${props => props.theme.palette.secondary.main};
  }

  &:active {
    /* background: ${props => props.theme.palette.secondary.light}; */
    background-color: red;
  }

  &:link,
  &:visited {
    text-decoration: none;
    color: ${props => props.theme.palette.primary.main};
    font-size: 1.4rem;
  }
`;

export default Link;
