export let cusArr = [];

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

export const generateStarRating = (rating) => {
  const filledStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <span key={index}>
      <i className="bx bxs-star" style={{ color: "#ffc600" }} />
    </span>
  ));

  const halfStar =
    rating % 1 !== 0 ? (
      <span key="half-star">
        <i className="bx bxs-star-half" style={{ color: "#ffc600" }} />
      </span>
    ) : null;

  const emptyStars = Array.from(
    { length: 5 - Math.ceil(rating) },
    (_, index) => (
      <span key={`empty-star-${index}`}>
        <i className="bx bxs-star" style={{ color: "grey" }} />
      </span>
    )
  );

  return [...filledStars, halfStar, ...emptyStars];
};

export const addCusDetails = (
  nameInput,
  mobileNoInput,
  emailInput,
  pinCodeInput,
  addressInput
) => {
  let cus = {
    name: nameInput,
    mobile: mobileNoInput,
    email: emailInput,
    pinCode: pinCodeInput,
    address: addressInput,
  };
  cusArr.push(cus);
};
