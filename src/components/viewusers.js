import axios from "axios";
import { useState, useEffect } from "react";

export default function Show() {
    const [result, setResult] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/viewall")
            .then((res) => {
                console.log("API response: ", res.data);
                if (Array.isArray(res.data)) {
                    setResult(res.data);
                } else {
                    console.error("Expected an array but got: ", res.data);
                    setResult([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setResult([]);
            });
    }, []);

    if (result === null) {
        return (
            <div style={{ color: "white", textAlign: "center", paddingTop: "20px" }}>
                Fetching result...
            </div>
        );
    } else {
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
                        backgroundColor: "#f8edeb", // Light cream background
                        padding: "20px",
                        borderRadius: "10px",
                        width: "80%",
                        marginTop: "50px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Softer shadow
                    }}
                >
                    <h2 style={{ color: "#2b2d42", textAlign: "center", marginBottom: "20px" }}>View Users</h2>
                    <table
                        border="1"
                        style={{
                            borderCollapse: "collapse",
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "#ffffff", // White table background
                        }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: "#caf0f8" }}> {/* Light blue header */}
                                <th style={{ padding: "10px", color: "#023e8a" }}>Firstname</th>
                                <th style={{ padding: "10px", color: "#023e8a" }}>Lastname</th>
                                <th style={{ padding: "10px", color: "#023e8a" }}>Email</th>
                                <th style={{ padding: "10px", color: "#023e8a" }}>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((obj, index) => (
                                <tr
                                    key={index}
                                    style={{
                                        backgroundColor: index % 2 === 0 ? "#edf6f9" : "#f1faee", // Alternate pastel rows
                                    }}
                                >
                                    <td style={{ padding: "10px" }}>{obj.firstname}</td>
                                    <td style={{ padding: "10px" }}>{obj.lastname}</td>
                                    <td style={{ padding: "10px" }}>{obj.email}</td>
                                    <td style={{ padding: "10px" }}>{obj.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
