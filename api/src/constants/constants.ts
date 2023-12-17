export const baseUrl = 'https://petstore.swagger.io/v2/store/order';

export const orderId = Math.floor(Math.random() * 10) + 1;

export const orderIdInvalid = Math.floor(Math.random() * 20) + 1;

export const baseUrlForPUT = 'https://petstore.swagger.io/v2/pet';

export const newValueForOrder = {
  id: Math.floor(Math.random() * 10) + 1,
  petId: Math.floor(Math.random() * 20) + 1,
  quantity: Math.floor(Math.random() * 20) + 1,
  status: "placed",
  complete: true
};

export const updatedValueForPet = {
  id: Math.floor(Math.random() * 10) + 1,
  category: {
    id: Math.floor(Math.random() * 10) + 1,
    name: "NUK"
  },
  name: "doggie",
};

export const updatedValueForPetWrong = {
  id: Math.floor(Math.random() * 10) + 1,
  category: {
    id: Math.floor(Math.random() * 10) + 1,
    name: 123
  },
  name: 123,
};

export const MESSAGE_ERROR = {
  error: 'Not Found'
};

export const MESSAGE_MISSING_ERROR = {
  error: 'Missing required fields'
};

export const MESSAGE_DELETE_ERROR = {
  message: "Order Not Found",
};