import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import axios from 'axios';
import { serviceOptions } from '../services';

const HttpBase = props => {
  const { authenticatedUser } = useContext(AppContext);

  const myAxios = axios.create({
    baseURL: 'http://localhost:58189' //TODO: change to use configuration
  });
  serviceOptions.axios = myAxios;

  useEffect(() => {
    console.log('http interceptor refreshed! auth user: ', authenticatedUser);

    if (authenticatedUser) {
      serviceOptions.axios = axios.create({
        baseURL: 'http://localhost:58189', //TODO: change to use configuration
        headers:
          authenticatedUser && authenticatedUser.Token
            ? { Authorization: 'Bearer ' + authenticatedUser.Token }
            : ''
      });
    }
  }, [authenticatedUser]);

  return <>{props.children}</>;
};

export default HttpBase;
