import React from 'react';
import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Triangle
      height="200"
      width="200"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
