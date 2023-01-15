import { configureStore } from '@reduxjs/toolkit';
import coupons from '../features/coupon/CouponSlice';

export default configureStore({
  reducer: {
    coupons: coupons,
  },
});
