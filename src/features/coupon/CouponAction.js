import { couponSlice } from '../coupon/CouponSlice';
import couponService from '../../service/CouponService'

export const getCoupons=() => {
  return async(dispatch,getState)=>{
    if(getState().coupons.data == null) {
      const response = await couponService.getAllCoupon();
      console.log(response);
      dispatch(couponSlice.actions.setCoupon(response))
    }
  }
}