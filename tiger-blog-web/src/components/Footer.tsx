import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StackOverflow } from '../assets/icons8-stack-overflow.svg';
import { ReactComponent as Linkedin } from '../assets/icons8-linkedin.svg';
import { ReactComponent as Github } from '../assets/icons8-github.svg';

const StyleWrapper = styled.div`
  background: ${props => props.theme.palette.background.paper};
  display: flex;
  justify-content: center;

  & > div {
    width: 60vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 300;
    font-size: 1.2rem;

    & > ul {
      display: inline-block;
      list-style: none;
      margin-left: 2rem;

      & > li {
        display: inline-block;
        padding: 0.75rem 1rem;
        margin: 0 0.2rem;
        cursor: pointer;

        &:hover {
          background: ${props => props.theme.palette.grey[200]};
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyleWrapper>
      <div>
        <span className="copyright">&copy; 2019 vvctiger</span>
        <ul className="links">
          <li>
            <Github />
          </li>
          <li>
            <StackOverflow />
          </li>
          <li>
            <Linkedin />
          </li>
        </ul>
      </div>
    </StyleWrapper>
  );
};

export default Footer;
