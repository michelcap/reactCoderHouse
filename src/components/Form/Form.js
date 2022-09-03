import React, { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';

const Form = () => {

    const { addBuyer } = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
        addBuyer(buyer);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="form-row">
                <div class="col">
                    <h4 class='h4'>Formulario de datos Personales</h4>
                </div>
                <div class="col">
                    <input
                        type="text"
                        name="firstName"
                        value={buyer.firstName}
                        placeholder="First name"
                        class="form-control"
                        onChange={handleChange}
                    />
                </div>
                <div class="col">
                    <input
                        type="text"
                        name="lastName"
                        value={buyer.lastName}
                        placeholder="Last name"
                        class="form-control"
                        onChange={handleChange}
                    />
                </div>
                <div class="col">
                    <input
                        type="number"
                        name="phoneNumber"
                        value={buyer.phoneNumber}
                        placeholder="Phone number"
                        class="form-control"
                        onChange={handleChange}
                    />
                </div>
                <div class="col">
                    <input
                        type="email"
                        name="email"
                        value={buyer.email}
                        placeholder="email"
                        class="form-control"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </form>
    );
};

export default Form;