import React from 'react';
import { ComponentProps } from './typing';
import SvgImage from './assets/airport.svg';
import JpegImage from './assets/test-jpeg.jpeg';
import WebpImage from './assets/test-webp.webp';
import './index.scss';

const AssetsDistDemo: React.FC<ComponentProps> = () => {
  return (
    <div>
      <h1>Test assets in css</h1>
      <div>
        <h2>Test svg: </h2>
        <div className="test-svg" />
      </div>
      <div>
        <h2>Test jpeg: </h2>
        <div className="test-jpeg" />
      </div>
      <div>
        <h2>Test webp: </h2>
        <div className="test-webp" />
      </div>
      <h1>Test assets in js</h1>
      <div>
        <h2>Test svg: </h2>
        <img src={SvgImage} className="image-box" alt="test svg" />
      </div>
      <div>
        <h2>Test jpeg: </h2>
        <img src={JpegImage} className="image-box" alt="test jpeg" />
      </div>
      <div>
        <h2>Test webp: </h2>
        <img src={WebpImage} className="image-box" alt="test webp" />
      </div>
    </div>
  );
};

export default AssetsDistDemo;
