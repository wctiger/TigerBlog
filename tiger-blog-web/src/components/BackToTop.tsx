import React, { useState } from 'react';
import styled from 'styled-components';
import { Fab, Tooltip, Fade } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';

const scroll = () => {
  let scrollCounter = window.pageYOffset / 50;
  let delay = 0;
  for (; scrollCounter >= 0; scrollCounter--) {
    delay = delay + 16.66;
    // scroll at: 0*delay, 1*delay, 2*delay... n*delay to make a smooth effect
    setTimeout(() => {
      window.scroll(0, window.pageYOffset - 50); // 50: 50px
    }, delay);
  }
};

class BackToTop extends React.Component {
  state = {
    show: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition.bind(this), {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition.bind(this));
  }

  checkPosition() {
    this.setState({ show: window.pageYOffset > 50 });
  }

  render() {
    return (
      <Fade in={this.state.show}>
        {this.state.show ? (
          <Tooltip title="Back To Top" placement="left">
            <StyledFab color="secondary" onClick={() => scroll()}>
              <ArrowUpward style={{ transform: 'translateY(3px)' }} />
            </StyledFab>
          </Tooltip>
        ) : (
          <div />
        )}
      </Fade>
    );
  }
}

const StyledFab = styled<any>(Fab)`
  && {
    position: fixed;
    display: block;
    bottom: 5rem;
    right: 5rem;
  }
`;

export default BackToTop;
