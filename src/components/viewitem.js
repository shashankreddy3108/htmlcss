import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewItem = () => {
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
        <div
            style={{
                minHeight: '100vh',
                backgroundImage: 'url("https://i.pinimg.com/474x/d0/fc/f1/d0fcf1e40777561d0d2187631eb314c8.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            {loading ? (
                <p style={styles.loadingText}>Loading...</p>
            ) : error ? (
                <p style={styles.errorText}>{error}</p>
            ) : (
                items.map((item) => (
                    <div key={item.id} style={styles.card}>
                        <h3 style={styles.cardTitle}>{item.type}</h3>
                        <p style={styles.cardDescription}>{item.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

// Inline CSS styles
const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '15px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        width: '200px',
        textAlign: 'center',
        backgroundColor: '#fff',
        margin: '10px',
    },
    cardTitle: {
        fontSize: '1.2em',
        margin: '10px 0',
    },
    cardDescription: {
        fontSize: '0.9em',
        color: '#555',
    },
    loadingText: {
        color: '#fff',
        fontSize: '1.2em',
    },
    errorText: {
        color: '#ff4d4d',
        fontSize: '1.2em',
    },
};

export default ViewItem;
