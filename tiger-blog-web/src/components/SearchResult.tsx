import React from 'react';
import styled from 'styled-components';
import { PostModel } from '../models/post';
import { RouteComponentProps, withRouter } from 'react-router';

interface IProps extends RouteComponentProps<any> {
  data: PostModel[];
  filter?: string;
  onSelect?: () => void;
}

const SearchResult: React.FunctionComponent<IProps> = props => {
  const filteredData = props.data.filter(p => p.Title.includes(props.filter));
  return (
    <Popover>
      {filteredData.length ? (
        filteredData.map(p => (
          <MenuItem
            key={p.PostId}
            onClick={() => {
              props.onSelect();
              props.history.push('/posts/' + p.PostId);
            }}
          >
            {p.Title}
          </MenuItem>
        ))
      ) : (
        <NoResult>No Results Found.</NoResult>
      )}
    </Popover>
  );
};

const Popover = styled.div`
  position: absolute;
  top: 105%;

  width: 28rem;
  max-height: 30rem;
  overflow-y: scroll;

  background-color: ${props => props.theme.palette.background.paper};
  border-radius: 5px;
  border-top-left-radius: 0;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  z-index: 2000;
`;

const MenuItem = styled.div`
  font-size: 1.8rem;
  color: ${props => props.theme.palette.text.primary};
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: ${props => props.theme.palette.primary.light};
    color: ${props => props.theme.palette.primary.contrastText};
  }
`;

const NoResult = styled.div`
  padding: 4rem 0;
  text-align: center;
  font-size: 2rem;
  overflow-y: hidden;
  color: ${props => props.theme.palette.text.primary};
`;

export default withRouter(SearchResult);
