import React, {useState} from "react";
import axios from 'axios';
import styles from '../styles.module.css';
import Button from 'react-bootstrap/Button';
const endPoint = "https://643889f74660f26eb19e713b.mockapi.io/comments";

const Create = () => {
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState(0)
    
    const PostData = (event) => { 
        event.preventDefault();

        axios.post(endPoint, {
            userName,
            comment,
            date
        }) 
    }

    const LogData = () => {
        console.log(userName);
        console.log(comment);
        console.log(date);
    }

    return(
        <div>
            <h2 className={styles["commentHeader"]}>Please Leave A Comment!</h2><br></br>
            <form className={styles["comment-form"]} onSubmit={PostData}>
                <input type="text" name="userName" placeholder="User Name" 
                    onChange={(e) => setUserName(e.target.value)}/> <br/><br/>
                <textarea type="text" name="comment" placeholder="Comment" 
                    onChange={(e) => setComment(e.target.value)}/> <br/><br/>
                <input type="date" name="date" 
                    onChange={(e) => setDate(e.target.value)}/> <br/><br/>
                <Button type="submit" variant="primary" className={styles["submit-button"]} onClick={LogData}>Submit</Button>
            </form>
        </div>
    )
}

export default Create;