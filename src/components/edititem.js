import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditItem() {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [updatedData, setUpdatedData] = useState({ id: "", type: "", description: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch items from the backend API when the component mounts
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

    // Handle input change for the updated item data
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData({ ...updatedData, [name]: value });
    };

    // Start editing an item
    const startEditing = (item) => {
        setEditingItem(item);
        setUpdatedData({ id: item.id, type: item.type, description: item.description });
    };

    // Submit the edited item
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/updateitem`, updatedData);
            const updatedItems = items.map(item =>
                item.id === updatedData.id ? { ...item, ...updatedData } : item
            );
            setItems(updatedItems);
            setEditingItem(null);
            alert('Item updated successfully');
        } catch (err) {
            console.error(err);
            alert('Error updating item');
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
                <h2 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>Edit Item</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
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
                                    <td style={styles.cell}>{item.id}</td>
                                    <td style={styles.cell}>{item.type}</td>
                                    <td style={styles.cell}>{item.description}</td>
                                    <td style={styles.cell}>
                                        <button
                                            onClick={() => startEditing(item)}
                                            style={styles.editButton}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {editingItem && (
                    <form onSubmit={handleEditSubmit} style={styles.editForm}>
                        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit Item</h3>
                        <div style={styles.formGroup}>
                            <label htmlFor="id">ID</label>
                            <input
                                type="text"
                                name="id"
                                value={updatedData.id}
                                readOnly
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="type">Type</label>
                            <select
                                name="type"
                                value={updatedData.type}
                                onChange={handleInputChange}
                                style={styles.input}
                            >
                                <option value="dances">Dances</option>
                                <option value="food">Food</option>
                                <option value="art">Art</option>
                                <option value="monuments">Monuments</option>
                            </select>
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                value={updatedData.description}
                                onChange={handleInputChange}
                                style={{ ...styles.input, ...styles.textarea }}
                            />
                        </div>
                        <button type="submit" style={styles.button}>
                            Update Item
                        </button>
                        <button
                            type="button"
                            onClick={() => setEditingItem(null)}
                            style={styles.cancelButton}
                        >
                            Cancel
                        </button>
                    </form>
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
        marginBottom: '20px',
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
    editButton: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
    },
    editForm: {
        marginTop: '20px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',  // Border around the form
    },
    formGroup: {
        marginBottom: '15px',
        border: '1px solid #ddd',  // Border around the form groups
        padding: '10px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',  // Border for input fields
        boxSizing: 'border-box',
    },
    textarea: {
        height: '100px',
        resize: 'vertical',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: 'white',
        border: '1px solid #ccc',  // Border around the button
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    cancelButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: '1px solid #ccc',  // Border around the cancel button
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
};
