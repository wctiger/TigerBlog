import React from 'react';
import styled from 'styled-components';

const ViewPort = props => (
  <Container>
    <Content>{props.children}</Content>
  </Container>
);

const Content = styled.div`
  width: 60vw;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
  min-height: 80vh;
`;

export default ViewPort;
