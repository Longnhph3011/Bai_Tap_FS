// Bài 1: Tính tổng tiền thanh toán của giỏ hàng sau
const cart = [
    {
      title: "DẾ MÈN PHIÊU LƯU KÝ",
      price: 50000,
      quantity: 2,
    },
    {
      title: "KIM ĐỒNG",
      price: 40000,
      quantity: 7,
    },
    {
      title: "NGỌN LỬA ĐÊM BA MƯƠI",
      price: 21000,
      quantity: 4,
    },
    {
      title: "CÔ BÉ GANH TỊ",
      price: 27500,
      quantity: 5,
    },
  ];
  
  let sum = 0;
  for (total of cart) {
    sum += total.price * total.quantity;
  }
  return console.log(sum);
  