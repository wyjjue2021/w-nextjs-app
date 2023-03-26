import React from 'react';
import { Carousel } from 'antd';
import styles from './carousel.module.less';
import ad01Image from '@/assets/main/banner1.png';
import ad02Image from '@/assets/main/banner2.png';
import ad03Image from '@/assets/main/banner3.png';

class CarouselComponent extends React.Component {
  render() {
    return (
      <div className={styles['carousel-outer']}>
        <Carousel autoplay dotPosition="bottom" style={{ height: '100%' }}>
          <div>
            <img src={ad01Image.src} alt="err" />
          </div>
          <div>
            <img src={ad02Image.src} alt="err" />
          </div>
          <div>
            <img src={ad03Image.src} alt="err" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
