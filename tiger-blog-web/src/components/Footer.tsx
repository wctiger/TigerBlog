import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-color: orangered;
  width: 100%;
  height: 2.5rem;

  & > ul {
    display: inline;
    list-style: none;
    & > li {
      display: inline-block;
      padding: 0.4rem;
      margin: 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyleWrapper>
      <span className="copyright">2019 vvctiger</span>
      <ul className="links">
        <li>Gi</li>
        <li>St</li>
        <li>Li</li>
      </ul>
    </StyleWrapper>
  );
};

export default Footer;
