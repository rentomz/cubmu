import React, { useState, useEffect } from 'react';
import Ic_menu from '../assets/image/ic_menu.png';
import Ic_arrow from '../assets/image/arrow-right.png';
import { useSelector, useDispatch } from 'react-redux';
import { getCoupons } from '../features/coupon/CouponAction';
import Loader from '../components/Loader';
import moment from 'moment';
import Popup from '../components/Popup';

export default function HomePage() {
  const [ActiveTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();
  const tabs = ['All', 'Food', 'Movies', 'Shop', 'Travel', 'Other'];

  const allCoupons = useSelector((state) => state.coupons.data);

  //Popup
  const [popupButton, setPopupButton] = useState(false);
  const [detailCoupon, setdetailCoupon] = useState({});

  useEffect(() => {
    dispatch(getCoupons());
  }, [allCoupons]);

  return (
    <section id="home">
      <div className=" bg-[#131417]">
        <div className="px-4 mx-auto lg:max-w-7xl lg:items-center py-16  lg:px-40">
          <h1 className='text-white font-["Raleway"] font-bold text-[26px] lg:text-3xl'>
            Benefit Kupon Untuk Kamu
          </h1>
          <hr className="border-[#1E1F26] border-1 my-3" />

          <div className="hidden lg:block text-sm font-medium text-center bg-[#1E1F26] text-[#B1B2B3] mt-10">
            <ul className="flex flex-wrap -mb-px">
              {tabs.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={`cursor-pointer transition border-b-4 flex-auto  ${
                      ActiveTab === index
                        ? 'border-[#DF4949] text-white'
                        : ' text-gray-500 border-[#68696A]'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <a
                      href="#"
                      className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-white"
                    >
                      <img src={Ic_menu} className=" mr-2" alt="" />
                      {value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {allCoupons != null ? (
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 relative my-8">
              {allCoupons.result.map((value, index) => {
                return (
                  <div
                    className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
                    key={index}
                  >
                    <img
                      className="w-full"
                      src={`${value.couponBrandLogo}`}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-4 py-4">
                      <h1 className="font-bold text-xl mb-2">
                        {value.couponBrandName}
                      </h1>
                      <div className="flex justify-between align-middle items-center mt-[10px]">
                        <div className="flex items-center">
                          <h1 className="text-[25px] text-[#26D27F] font-semibold">
                            {value.couponBenefitValue}
                          </h1>
                          {value.couponBenefitType == 'Discount' ? (
                            <h3 className="font-medium text-[#B3B3B3] ml-3">
                              Off
                            </h3>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="border rounded-full flex py-2 px-[14px] items-center">
                          <p className="mr-2 text-xs font-semibold">T&C</p>
                          <img src={Ic_arrow} className="h-3" alt="" />
                        </div>
                      </div>
                      <h3 className="text-xs text-[#868788] mt-3">
                        Promo Sampai{' '}
                        {moment(value.couponEndDate).format('D MMMM YYYY')}
                      </h3>
                    </div>
                    <div className="px-4 pb-4">
                      <button
                        className="bg-[#26D27F] text-white font-bold rounded w-full py-[10px]"
                        onClick={() => {
                          setPopupButton(true);
                          setdetailCoupon(value);
                        }}
                      >
                        Tukarkan
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      <Popup trigger={popupButton} setTrigger={setPopupButton} coupon={detailCoupon} />

      </div>
    </section>
  );
}
