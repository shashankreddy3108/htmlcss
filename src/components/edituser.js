import axios from "axios";
import { useState, useEffect } from "react";

export default function EditUser() {
    const [users, setUsers] = useState([]);
    const [editData, setEditData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });
    const [isEditing, setIsEditing] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/viewall").then((res) => {
            setUsers(res.data);
        });
    }, []);

    const handleChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value,
        });
    };

    const enableEdit = (user) => {
        setIsEditing(user.email);
        setEditData(user);
    };

    const saveEdit = () => {
        axios.put("http://localhost:8080/update", editData).then((res) => {
            alert(res.data);
            setUsers(
                users.map((user) =>
                    user.email === editData.email ? editData : user
                )
            );
            setIsEditing(null);
        });
    };

    return (
        <div
            style={{
                minHeight: "130vh",
                backgroundImage: 'url("https://i.pinimg.com/474x/d0/fc/f1/d0fcf1e40777561d0d2187631eb314c8.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            <div
                style={{
                    backgroundColor: '#fef8e6',
                    padding: '15px',
                    borderRadius: '10px',
                    width: '80%',
                    marginTop: '-350px',
                }}
            >
                <h2 style={{ color: '#5d4037', textAlign: 'center' }}>Edit User</h2>
                <table
                    border="1"
                    style={{
                        width: "100%",
                        textAlign: "center",
                        borderCollapse: "collapse",
                        margin: "0 auto",
                        backgroundColor: "#f5f5f5",
                    }}
                >
                    <thead>
                        <tr style={{ backgroundColor: "#d7e9f7" }}>
                            <th style={{ padding: '10px', color: '#333' }}>First Name</th>
                            <th style={{ padding: '10px', color: '#333' }}>Last Name</th>
                            <th style={{ padding: '10px', color: '#333' }}>Email</th>
                            <th style={{ padding: '10px', color: '#333' }}>Password</th>
                            <th style={{ padding: '10px', color: '#333' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#fefae0" : "#e3f2fd" }}>
                                <td>
                                    {isEditing === user.email ? (
                                        <input
                                            type="text"
                                            name="firstname"
                                            value={editData.firstname}
                                            onChange={handleChange}
                                            style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
                                        />
                                    ) : (
                                        user.firstname
                                    )}
                                </td>
                                <td>
                                    {isEditing === user.email ? (
                                        <input
                                            type="text"
                                            name="lastname"
                                            value={editData.lastname}
                                            onChange={handleChange}
                                            style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
                                        />
                                    ) : (
                                        user.lastname
                                    )}
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    {isEditing === user.email ? (
                                        <input
                                            type="text"
                                            name="password"
                                            value={editData.password}
                                            onChange={handleChange}
                                            style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
                                        />
                                    ) : (
                                        user.password
                                    )}
                                </td>
                                <td>
                                    {isEditing === user.email ? (
                                        <button
                                            onClick={saveEdit}
                                            style={{
                                                backgroundColor: "#81c784",
                                                color: "#fff",
                                                padding: "5px 10px",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => enableEdit(user)}
                                            style={{
                                                backgroundColor: "#64b5f6",
                                                color: "#fff",
                                                padding: "5px 10px",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Edit
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
