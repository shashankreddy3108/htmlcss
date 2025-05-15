import React, { useState } from 'react';
import axios from 'axios';

export default function AddItem() {
    const [itemData, setItemData] = useState({
        id: "",
        type: "dances",
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, type, description } = itemData;

        if (!id || !type || !description) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/additem", {
                id: id,
                type: type,
                description: description
            });
            alert("Item added successfully");
        } catch (err) {
            console.error(err);
            alert('Error adding item');
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundImage: 'url("https://i.pinimg.com/474x/d0/fc/f1/d0fcf1e40777561d0d2187631eb314c8.jpg")', // Updated background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            <div style={styles.container}>
                <h2 style={styles.heading}>Add New Item</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label htmlFor="id" style={styles.label}>ID</label>
                        <input
                            type="text"
                            name="id"
                            value={itemData.id}
                            onChange={handleInputChange}
                            placeholder="Enter item ID..."
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label htmlFor="type" style={styles.label}>Type</label>
                        <select
                            name="type"
                            value={itemData.type}
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
                        <label htmlFor="description" style={styles.label}>Description</label>
                        <textarea
                            name="description"
                            value={itemData.description}
                            onChange={handleInputChange}
                            placeholder="Enter description..."
                            style={{ ...styles.input, ...styles.textarea }}
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        Add Item
                    </button>
                </form>
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
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
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
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};
