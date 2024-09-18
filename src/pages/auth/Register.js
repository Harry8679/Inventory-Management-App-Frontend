import React from 'react';
import styles from './auth.module.scss';
import Card from '../../component/card/Card';
import { FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
                <div className="--flex-center">
                    <FaUserPlus size={35} color='#999' />
                </div>
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder='Name' required name='name' />
                    <input type="email" placeholder='Email' required name='email' />
                    <input type="password" placeholder='Password' required name='password' />
                    <input type="password" placeholder='Confirm Password' required name='password2' />

                    <buton type="submit" className="--btn --btn-primary --btn-block">Login</buton>
                </form>
                <Link to='/forgot'>Forgot Password</Link>

                <span className={styles.register}>
                    <Link to='/'>Home</Link>
                    <p> &nbsp; Already have an account ? &nbsp;</p>
                    <Link to='/login'>Login</Link>
                </span>
            </div>
        </Card>
    </div>
  )
}

export default Register;
