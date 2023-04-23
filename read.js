import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
const endPoint = 'https://643889f74660f26eb19e713b.mockapi.io/comments';


function ReadApi() {
    
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(endPoint)
            .then((response) => {
                setApiData(response.data);
            })
    }, [])
    
    const handleDelete = (id) => {
        axios.delete(`https://643889f74660f26eb19e713b.mockapi.io/comments/${id}`)
    }


    const setData = (data) => {
        let { id, userName, comment, date } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('User Name', userName);
        localStorage.setItem('Comment', comment);
        localStorage.setItem('Date', date);
    }

    return(
        <div className={styles["cardContainer"]}>
               {apiData.map((data) =>
                <Card className="cards" 
                style={{width: '40rem',
                    marginLeft: '300px'
                
                }} key={data.id}>
                    <Card.Body>
                        <Card.Header as="h4" className={styles['header']}>
                        {data.userName}
                        </Card.Header>
                        <Card.Text style={{
                            padding: '10px',
                            border: 'solid',
                            marginTop: '10px',
                            marginBottom: '30px'
                        }}>
                        {data.comment}
                        </Card.Text>
                        <Card.Subtitle className={styles['date']}>
                        {data.date}
                        </Card.Subtitle><br/>
                        <Link to='/update'>
                            <Button onClick={() => setData(data)} className={styles["update-btn"]}>Update</Button>
                        </Link>
                        <Button className="delete-btn" variant="danger" onClick={() => handleDelete(data.id)} >Delete</Button>
                    </Card.Body><br/>
                </Card> 
                )}
        </div>
    )
}

export default ReadApi;