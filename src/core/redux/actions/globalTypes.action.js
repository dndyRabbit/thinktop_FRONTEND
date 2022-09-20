export const GLOBALTYPES = {
  AUTH: "AUTH",
  ALERT: "ALERT",
};

export const DeleteData = (data, id) => {
  // console.log(data, "DATA IN GLOBAL");
  // console.log(id, "ID IN GLOBAL");
  const newData = data.filter((item) => item.uuid !== id);
  // console.log(newData, " new DATA IN GLOBAL");
  return newData;
};

export const EditData = (data, id, post) => {
  const newData = data.map((item) => (item._id === id ? post : item));
  return newData;
};
