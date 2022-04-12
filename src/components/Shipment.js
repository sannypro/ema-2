import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const Shipment = () => {
    const [email, setEmail] = useState('')
    const [user] = useAuthState(auth);
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const handleNameBlur = (e) => {
        setName(e.target.value)
    };
    const handlePasswordBlur = (e) => {
        setAddress(e.target.value)
    }
    const hanldeConfirmPasswordBlur = (e) => {
        setPhone(e.target.value)
    }
    const handleCreateUser = e => {
        e.preventDefault();

    }
    return (

        <div className='form-container'>
            <div>
                <div>
                    <h2 className='form-title'>Shippin Info</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className='input-group'>
                            <label htmlFor="name">Name</label>
                            <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input value={user.email} readOnly type="text" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="address">Address</label>
                            <input onBlur={handlePasswordBlur} type="text" name="address" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="phone-number"> Phone number</label>
                            <input onBlur={hanldeConfirmPasswordBlur} type="text" name="phone" id="" required />
                            <input className='form-submit' type="submit" value="add shipping" />
                        </div>

                    </form>

                </div>
            </div>
        </div>

    );
};

export default Shipment;