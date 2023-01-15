import axios from "axios";

export default {
  async getAllCoupon() {
    var response = await axios({
      method: 'get',
      url: '/getCoupon',
      params: {
        username: 'user1673281842743',
      },
    });
    return response.data;
  },
};
