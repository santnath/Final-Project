import React from "react";
import FlyComparison from '../assets/flyComparison.jpeg';
import Streamer from '../assets/streamer.png';
import Stimulator from '../assets/stimulator.jpg';
import styles from '../styles.module.css';
import { Container } from "react-bootstrap";

function DisplayFlies () {
    return (
        <Container className={styles["flyContainer"]}>
        <div>
            <div className={styles['picture']}>
                <img src={FlyComparison} alt="compare" height={250} width={500}></img>
                <p className={styles["flyP"]}>
                    This figure shows how to compare what bugs or other food source
                    are present in the river/lake, to pick the right fly to use.
                </p>
            </div>
            <div className={styles["picture"]}>
                <img src={Streamer} alt="streamer" height={250} width={250}></img>
                <p className={styles["flyP"]}>
                    Streamers are a perfect fly that mimick small fish or crayfish that drive
                    bass or other aggressive fish crazy!
                </p>
            </div>
            <div className={styles["picture"]}>
            <img src={Stimulator} alt="stimulator" height={250} width={250}></img>
                <p className={styles["flyP"]}>
                    Stimulators are a great fly to use if there are big bugs on top water
                    or things like grasshoppers.
                </p>
            </div>
        </div>
        </Container>
    );
}

export default DisplayFlies;