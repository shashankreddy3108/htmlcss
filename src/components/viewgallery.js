import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/getitems');
                setItems(response.data);
            } catch (err) {
                console.error(err);
                setError('Error fetching items');
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>View Items</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div style={styles.cardContainer}>
                    {items.map((item) => (
                        <div key={item.id} style={styles.card}>
                            <h3 style={styles.cardTitle}>{item.type}</h3>
                            <p style={styles.cardDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Inline CSS styles
const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#282c34', // A deep, aesthetic background color
    },
    header: {
        textAlign: 'center',
        marginBottom: '50px',
        color: '#61dafb', // Light blue for the header text for contrast
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        justifyContent: 'center',
    },
    card: {
        border: '1px solid #61dafb',
        borderRadius: '10px',
        padding: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Slightly more shadow for depth
        width: '200px',
        textAlign: 'center',
        backgroundColor: '#444', // Dark grey for the card background
    },
    cardTitle: {
        fontSize: '1.2em',
        margin: '10px 0',
        color: '#fff', // White for the card title text
    },
    cardDescription: {
        fontSize: '0.9em',
        color: '#aaa', // Light grey for card descriptions
    },
};

export default Gallery;
