export const formatRupiah = (value) => {
  if (value) {
    var currency = value
      .toString()
      .match(/.{1,3}/g)
      .join(".");
    currency = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); //replace sttring using regex
    return currency;
  } else {
    return value;
  }
};
