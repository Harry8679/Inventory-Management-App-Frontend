import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/feautures/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});