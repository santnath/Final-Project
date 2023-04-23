import React from "react";
import HomePicture from "./home-carosel";
import styles from '../styles.module.css';

export default class HomePage extends React.Component {
    render() {
        return(
            <div className={styles['home']}>
                <h1 className={styles['welcome']}>Welcome to Idaho Fly Fishing!</h1>
                <HomePicture  />
            </div>
        );
    }
}