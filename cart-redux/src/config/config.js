export const getPriceAfterDiscount = (price, dis) => {
  var p = price - price * (dis / 100);
  return p.toFixed(2);
};

export const getTotalPrice = (cart) => {
  var val = 0.0;
  for (let e of cart) {
    val +=
      e.quantity *
      getPriceAfterDiscount(e.product.price, e.product.discountPercentage);
  }
  return val.toFixed(2);
};

export const getFirstLine = (text) => {
  if (!text) return "";
  return text.length > 50 ? text.substring(0, 50) + "..." : text;
};
