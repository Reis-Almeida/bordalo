import React from 'react';
import { Feature } from './style';
import LazyLoad from "react-lazyload";

import { IFeatureComponent } from "interfaces/index";

const FeatureComponent : React.FC<IFeatureComponent> = ({ icon, text, title }) => {
  return (
    <LazyLoad
        offset={200}
        once
    >
      <Feature>
          <div>{icon}</div>
          <div>{title}</div>
          <div>{text}</div>
      </Feature> 
    </LazyLoad>
  );
}


export default FeatureComponent;