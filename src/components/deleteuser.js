import axios from "axios";
import { useState, useEffect } from "react";

export default function DeleteUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/viewall").then((res) => {
            setUsers(res.data);
        });
    }, []);

    const deleteUser = (email) => {
        axios
            .delete("http://localhost:8080/delete", {
                params: {
                    email: email,
                },
            })
            .then((res) => {
                alert(res.data);
                setUsers(users.filter((user) => user.email !== email));
            });
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundImage: 'url("https://i.pinimg.com/474x/d0/fc/f1/d0fcf1e40777561d0d2187631eb314c8.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "20px",
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff8dc",
                    padding: "15px",
                    borderRadius: "10px",
                    width: "80%",
                    marginTop: "50px",
                }}
            >
                <h2 style={{ color: "#5d4037", textAlign: "center" }}>Delete User</h2>
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
                            <th style={{ padding: "10px", color: "#333" }}>First Name</th>
                            <th style={{ padding: "10px", color: "#333" }}>Last Name</th>
                            <th style={{ padding: "10px", color: "#333" }}>Email</th>
                            <th style={{ padding: "10px", color: "#333" }}>Password</th>
                            <th style={{ padding: "10px", color: "#333" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? "#e7f4e4" : "#e3f2fd",
                                }}
                            >
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button
                                        onClick={() => deleteUser(user.email)}
                                        style={{
                                            backgroundColor: "#e57373",
                                            color: "white",
                                            padding: "5px 10px",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
