import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DeleteItem() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch items from the backend API when the component mounts
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/getitems');
                setItems(response.data);  // Sets items data in state
            } catch (err) {
                console.error(err);
                setError('Error fetching items');  // Handles errors
            } finally {
                setLoading(false);  // Stops loading spinner after data fetch
            }
        };

        fetchItems();
    }, []);

    // Function to delete an item by ID
    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8080/deleteitem", {
                params: { id: id },  // Sends item ID to backend to delete
            });
            setItems(items.filter(item => item.id !== id));  // Filters deleted item
            alert('Item deleted successfully');  // Alerts user on successful deletion
        } catch (err) {
            console.error(err);
            alert('Error deleting item');  // Error handling on delete failure
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundImage: 'url("https://i.pinimg.com/474x/d0/fc/f1/d0fcf1e40777561d0d2187631eb314c8.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            <div style={styles.container}>
                <h2 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>Delete Item</h2>
                {loading ? (
                    <p>Loading...</p>  // Displays loading message while fetching data
                ) : error ? (
                    <p>{error}</p>  // Displays error message if fetching fails
                ) : (
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.header}>ID</th>
                                <th style={styles.header}>Type</th>
                                <th style={styles.header}>Description</th>
                                <th style={styles.header}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td style={styles.cell}>{item.id}</td>  {/* Display item ID */}
                                    <td style={styles.cell}>{item.type}</td>  {/* Display item type */}
                                    <td style={styles.cell}>{item.description}</td>  {/* Display item description */}
                                    <td style={styles.cell}>
                                        <button 
                                            onClick={() => handleDelete(item.id)} 
                                            style={styles.deleteButton}
                                        >
                                            Delete  {/* Delete button to remove item */}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

// Inline CSS styles
const styles = {
    container: {
        width: '80%',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginTop: '50px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'center',
    },
    header: {
        border: '1px solid #ddd',  // Add border to header cells
        padding: '10px',
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold',
    },
    cell: {
        border: '1px solid #ddd',  // Add border to data cells
        padding: '10px',
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
    },
};
