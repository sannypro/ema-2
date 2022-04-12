import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../components/firebase.init'

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        errorHook,
        sendEmailVerification
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    if (user) {
        navigate('/shop')
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
    };
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    const hanldeConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('two password mismatched')
            return;
        }
        if (password.length < 6) {
            setError("password must be 6 character")
        }
        createUserWithEmailAndPassword(email, password,)
    }
    return (
        <div className='form-container'>
            <div>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="confirm-password"> Confirm Password</label>
                            <input onBlur={hanldeConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>
                        Already Have an account? <Link className='form-link' to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;