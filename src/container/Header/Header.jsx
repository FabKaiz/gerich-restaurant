import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app_header-h1">The key to Fine dining</h1>
    </div>
    <div className="app__wrapper_img">
      
    </div>
  </div>
);

export default Header;
