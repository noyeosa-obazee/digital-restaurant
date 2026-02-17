import React, { useState } from "react";
import "./Cart.css";
import Footer from "../Footer/Footer";

// Mock data to initialize the cart
const INITIAL_ITEMS = [
    {
        id: 1,
        name: "Jollof Rice & Fried Chicken",
        desc: "With plantain, extra pepper sauce",
        price: 3200,
        qty: 1,
        img: "https://placehold.co/150x150?text=Jollof",
    },
    {
        id: 2,
        name: "Jollof Rice & Fried Chicken",
        desc: "With plantain, extra pepper sauce",
        price: 3200,
        qty: 1,
        img: "https://placehold.co/150x150?text=Rice",
    },
    {
        id: 3,
        name: "Jollof Rice & Fried Chicken",
        desc: "With plantain, extra pepper sauce",
        price: 3200,
        qty: 1,
        img: "https://placehold.co/150x150?text=Chicken",
    },
    {
        id: 4,
        name: "Jollof Rice & Fried Chicken",
        desc: "With plantain, extra pepper sauce",
        price: 3200,
        qty: 1,
        img: "https://placehold.co/150x150?text=Meal",
    },
];

const Cart = () => {
    const [items, setItems] = useState(INITIAL_ITEMS);

    // Handle Quantity Change
    const updateQty = (id, delta) => {
        setItems(
            items.map((item) => {
                if (item.id === id) {
                    const newQty = item.qty + delta;
                    return newQty > 0 ? { ...item, qty: newQty } : item;
                }
                return item;
            }),
        );
    };

    // Handle Remove Item
    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div>
            <div className="cart-container">
                <h2 className="cart-title">Your Cart</h2>

                <div className="cart-list">
                    {items.map((item) => (
                        <div key={item.id} className="cart-item">
                            {/* Image */}
                            <div className="item-image">
                                <img src={item.img} alt={item.name} />
                            </div>

                            {/* Details */}
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="item-actions">
                                <button
                                    className="qty-btn"
                                    onClick={() => updateQty(item.id, 1)}
                                >
                                    +
                                </button>
                                <span className="qty-display">{item.qty}</span>
                                <button
                                    className="qty-btn"
                                    onClick={() => updateQty(item.id, -1)}
                                >
                                    −
                                </button>
                            </div>

                            {/* Price */}
                            <div className="item-price">
                                ₦{item.price.toLocaleString()}
                            </div>

                            {/* Remove Button */}
                            <button
                                className="remove-btn"
                                onClick={() => removeItem(item.id)}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-footer-link">
                    <a href="/explore">
                        <span>+</span> Add more items from Chuks Kitchen
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
