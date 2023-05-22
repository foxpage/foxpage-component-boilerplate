import React from 'react';
import { ComponentProps } from './typing';
import './index.scss';

const HelloWorld: React.FC<ComponentProps> = props => {
  const { text = 'default text' } = props;

  return (
    <div>
      <h1>Hello World</h1>
      <div className="text">
        text:
        <span className="text-bold">{text}</span>
      </div>
    </div>
  );
};

export default HelloWorld;
