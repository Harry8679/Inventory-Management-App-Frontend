import React from 'react';
import styles from './auth.module.scss';
import Card from '../../component/card/Card';
import { MdLockReset } from "react-icons/md";
import { Link } from 'react-router-dom';

const Reset = () => {
  return (
    <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
                <div className="--flex-center">
                    <MdLockReset size={35} color='#999' />
                </div>
                <h2>Reset Password</h2>
                <form>
                    <input type="password" placeholder='New Password' required name='password' />
                    <input type="password" placeholder='Confirm New Password' required name='password2' />

                    <buton type="submit" className="--btn --btn-primary --btn-block">Reset Password</buton>

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

export default Reset;
