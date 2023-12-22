import { orderId, orderIdInvalid } from "./orderID";

export const newValueForOrder = {
  id: orderId,
  petId: orderIdInvalid,
  quantity: orderIdInvalid,
  status: "placed",
  complete: true
};

export const updatedValueForPet = {
  id: orderId,
  category: {
    id: orderId,
    name: "NUK"
  },
  name: "doggie",
};

export const updatedValueForPetWrong = {
  id: orderId,
  category: {
    id: orderId,
    name: 123
  },
  name: 123,
};