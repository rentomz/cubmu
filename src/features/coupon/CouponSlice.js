import { createSlice } from '@reduxjs/toolkit';

export const couponSlice = createSlice({
  name: 'coupon',
  initialState: {
    data: null,
  },
  reducers: {
    setCoupon: (state, action ) => {
      state.data = action.payload;
    },
  },
});

export const { setCoupon, } = couponSlice.actions;

export default couponSlice.reducer
