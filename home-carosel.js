import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brooke from '../assets/brooke.jpg';
import Brown from '../assets/browntrout.jpg';
import Rainbow from '../assets/rainbow.jpg';
import Cutty from '../assets/cutty.jpg';
import '../index.css';
import { Container } from "react-bootstrap";
import styles from '../styles.module.css';

function HomePictures() {
  return (
    <Container className={styles['container']}>
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className={styles['Cutty']}
          src={Cutty}
          alt="Cutthroat"
        />
        <Carousel.Caption >
          <p className={styles['caption']}>Yellowstone Cutthroat Trout</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className={styles['Brown']}
          src={Brown}
          alt="Brown"
        />
        <Carousel.Caption >
          <p className={styles['caption']}>Brown Trout</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className={styles['Brooke']}
          src={Brooke}
          alt="Brooke"
        />
        <Carousel.Caption >
          <p className={styles['caption']}>Brooke Trout</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className={styles['Rainbow']}
          src={Rainbow}
          alt="Rainbow"
        />
        <Carousel.Caption >
          <p className={styles['caption']}> Rainbow Trout</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default HomePictures;