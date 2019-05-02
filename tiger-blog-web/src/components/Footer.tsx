import React from 'react';
import styled from 'styled-components';

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
        padding: 1rem;
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
          <li>Gi</li>
          <li>St</li>
          <li>Li</li>
        </ul>
      </div>
    </StyleWrapper>
  );
};

export default Footer;
