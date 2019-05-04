import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import SearchResult from './SearchResult';
import { MOCKDATA } from '../models/mock';

interface IProps {
  color?: string;
}

const SearchBox: React.FunctionComponent<IProps> = props => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Styled color={props.color}>
      <span>
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder={'Search blog posts'}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm && searchTerm.length > 1 && (
        <SearchResult
          filter={searchTerm}
          data={MOCKDATA.map(d => ({
            ...d,
            CreatedTime: new Date(d.CreatedTime),
            UpdatedTime: new Date(d.UpdatedTime)
          }))}
          onSelect={() => setSearchTerm('')}
        />
      )}
    </Styled>
  );
};

const Styled = styled.div`
  position: relative;

  span {
    position: absolute;
    left: 0.8rem;
    top: 0.4rem;
  }

  input {
    background-color: rgba(255, 255, 255, 0.2);
    width: 18rem;
    margin-right: 3rem;
    padding: 0.8rem 2rem 0.8rem 4rem;
    border: none;
    border-radius: 5px;
    transition: width 0.3s ease;
    color: ${props => props.theme.palette.primary.contrastText};

    &:focus {
      outline: none;
      width: 24rem;
    }
  }
`;

export default SearchBox;
