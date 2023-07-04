import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then(res => setMessage(res.data.message))
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Product Manager</h2>
            <div style={{ margin: '0 auto', width: '50%' }}>
                <div>
                    <label>Title:</label>
                    <input type="text" placeholder="Enter title" />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" placeholder="Enter price" />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea placeholder="Enter description" rows="4" />
                </div>
            </div>
            <button style={{ marginTop: '20px' }}>Create</button>
        </div>
    );
};

export default ProductForm;

