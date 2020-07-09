## 🛍️ Ứng dụng ecommerce đề tài giới thiệu Web bán sách trực tuyến
# Bản Demo <a href="https://phongphamiuh.github.io/React-Redux-Thunk-FetchAPI-Ecommerce/" style="font-size: 40px">Click xem bản demo</a>
Vì deploy bằng page github có thể khiến hình ảnh bị vỡ. Chạy ứng dụng để xem chi tiết
## Tác giả 
- Phạm Quí Phong (18042041)
- Phạm Vĩ Khang (18052441)

## Chức năng
- Thêm và xóa sản phẩm từ giỏ hàng
- Update số lượng sản phẩm và thành tiền trong giỏ hàng
- Lọc sản phẩm theo danh mục, giá từ thấp tới cao và ngược lại
- Đăng ký tài khoản (sử dụng Redux-Thunk và FetchAPI)
- Đăng nhập (sử dụng Redux-Thunk và FetchAPI)

## Lợi ích, điểm mạnh các công nghệ sử dụng
- [React.js](https://reactjs.org/docs/getting-started.html): 
Ứng dụng sử dụng react.js là thư viện sigle page application mọi dữ liệu đều được render thành Json mỗi lần refesh lại trang web mà không cần reload lại. React sử dụng Virtual DOM giúp trang web có thể render lại những node cần render mà không cần render lại tất cả các node trong Tree Dom.
- [Redux](https://redux.js.org/introduction/getting-started): Là thử viện của javascript, redux hỗ trợ cho nhiều thư viện khác như react, redux xây dựng kiến trúc giúp xoay quanh các action, reducer, store. Chia bố cục trang web thành nhiều phần giúp người dùng dễ sử dụng
- [Redux-thunk](https://github.com/reduxjs/redux-thunk): là thư viện middleware cho asynchronous giúp người dùng có thể xử lý các xác thực về login.
- [Fetch API](https://reactjs.org/docs/faq-ajax.html) 
## Build/Run
#### Yêu cầu
- [Cài đặt NPM]( https://nodejs.org/en/download/) ( Not packed manager)

```javascript

/* Đầu tiên, Install những packed cần thiết */
npm install

/* Sau đó bắt đầu chạy Node và React */
npm start

```

