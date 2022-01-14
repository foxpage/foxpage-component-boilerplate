import React from 'react';
import { ComponentProps } from './typing';
import './index.scss';

const HelloComponent: React.FC<ComponentProps> = ({ text, children }) => {
  return (
    <div>
      <h1>Hello component:</h1>
      {text}
      {children}
    </div>
  );
};

export default HelloComponent;
