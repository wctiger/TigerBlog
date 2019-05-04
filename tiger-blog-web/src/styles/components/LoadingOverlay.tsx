import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

interface IProps {
  size?: number;
}

const LoadingOverlay = (props: IProps) => {
  return (
    <OverlayWrapper>
      <CircularProgress color="secondary" size={props.size ? props.size : 38} />
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9999;
  background-color: ${props =>
    props.theme.palette.type === 'light'
      ? 'rgba(5, 5, 5, 0.15)'
      : 'rgba(250, 250, 250, 0.15)'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoadingOverlay;
