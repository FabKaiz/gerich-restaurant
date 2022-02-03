import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.scss';

const Gallery = () => {
  return (
    <div className="app__galery flex__center">
      <div className="app__galery-content">
        <SubHeading title='Instagram' />
      </div>
    </div>
  )
} ;

export default Gallery;
