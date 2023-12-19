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