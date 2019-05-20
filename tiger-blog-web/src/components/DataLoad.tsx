import React, { useEffect, useState } from 'react';
import LoadingOverlay from '../styles/components/LoadingOverlay';

interface IProps extends React.PropsWithChildren<any> {
  request?: (params?: any) => Promise<any>;
  spinnerSize?: number;
}

const DataLoad = (props: IProps) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    props
      .request()
      .then(data => setData(data))
      .catch(error => console.warn(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingOverlay size={props.spinnerSize} />
      ) : (
        props.render(data)
      )}
    </React.Fragment>
  );
};

export default DataLoad;
