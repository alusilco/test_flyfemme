import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const endpoint = 'http://localhost:8000/api';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getAllCards();
    }, []);

    const getAllCards = async () => {
        const response = await axios.get(`${endpoint}/cards`);
        setCards(response.data);
    };

    const Card = async (id) => {
        await axios.get(`${endpoint}/card/${id}`);
        getAllCards();
    };

    return (
        <div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Number</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Location</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((card) => (
                        <tr key={card.id}>
                            <td>{card.id}</td>
                            <td>{card.title}</td>
                            <td>
                                <img
                                    src={`${process.env.REACT_APP_API}/${card.image}`}
                                    alt="Card image"
                                    style={{ width: "15%", height: "20%" }}
                                />
                            </td>
                            <td>{card.location}</td>
                            <td>{card.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cards;
