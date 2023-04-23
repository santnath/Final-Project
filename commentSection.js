import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReadApi from "../practiceCrud/read";
import Update from "../practiceCrud/update";
import Create from "../practiceCrud/create";
import styles from '../styles.module.css';


export default function CommentSection() {
    return(
        <div className={styles['comment-container']}>
            <ReadApi /><br/>
            <Create />
        </div>
    )
}