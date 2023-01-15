import React from 'react';
import moment from 'moment';

export default function Popup(props) {
  return (
    <div className={`${props.trigger ? 'modal block' : 'modal hidden'} h-auto w-[80%] lg:w-[60%]`}>
      <section className="modal-main rounded-xl relative">
        <div className="flex items-center top flex-wrap">
          <div className="text-lg font-bold text-primary-black basis-[100%] lg:basis-[40%] ">
            <img
              src={`${props.coupon.couponBrandLogo}`}
              alt=""
              className="rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
            />
          </div>
          <div className="basis-[100%] lg:basis-[60%] py-4 px-6 bg-white -mt-5 rounded-t-3xl rounded-b-xl lg:rounded-none lg:mt-0 z-20">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-bold text-xl lg:text-[22px] mb-1">
                  {props.coupon.couponBrandName}
                </h1>
                <h3 className="text-sm text-[#0000004D]">
                  Promo Sampai{' '}
                  {moment(props.coupon.couponEndDate).format('D MMMM YYYY')}
                </h3>
              </div>
              <div>
                <h1 className="text-xl lg:text-[32px] text-[#26D27F] font-semibold">
                  {props.coupon.couponBenefitValue}
                </h1>
              </div>
            </div>
            <div className="my-[40px] text-center">
              <h1 className="text-[22px] text-[#26D27F] font-semibold mb-4 ">
                Coupon Successfully <br />
                Redeemed
              </h1>
              <p className='text-[#14142B4D] text-sm'>12:30 PM</p>
            </div>
            <h1></h1>
            <button type="button" className='bg-[#26D27F] rounded-xl text-white font-semibold w-full py-[14px]' onClick={() => props.setTrigger(false)}>
              Done
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
