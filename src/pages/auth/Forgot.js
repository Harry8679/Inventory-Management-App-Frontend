import React from 'react';
import styles from './auth.module.scss';
import Card from '../../component/card/Card';
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
                <div className="--flex-center">
                    <HiOutlineMail size={35} color='#999' />
                </div>
                <h2>Forgot Password</h2>
                <form>
                    <input type="email" placeholder='Email' required name='email' />

                    <buton type="submit" className="--btn --btn-primary --btn-block">Get Reset Email</buton>

                    <div className={styles.links}>
                      <p>
                        <Link to='/'>- Home</Link>
                      </p>
                      <p>
                        <Link to='/'>- Login</Link>
                      </p>
                  </div>
                </form>
            </div>
        </Card>
    </div>
  )
}

export default Forgot;
