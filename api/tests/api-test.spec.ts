import superagent, { Response } from 'superagent';
import { baseUrl, baseUrlForPUT } from '../src/constants/baseUrl';
import { orderId, orderIdInvalid } from '../src/constants/orderID';
import { 
  newValueForOrder, 
  updatedValueForPet, 
  updatedValueForPetWrong 
} from '../src/constants/objectValue';
import { 
  MESSAGE_DELETE_ERROR, 
  MESSAGE_ERROR, 
  MESSAGE_MISSING_ERROR 
} from '../src/constants/messageError';

let response: Response;

describe('HTTP method test for pet shop site', () => {
  test('Should correctly return 200 status for Get request', async () => {
    try {
      response = await superagent.get(`${baseUrl}/${orderId}`);
    } catch (error: any) {
      throw new Error(error.message);
    }
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({ id: orderId });
  });

  test('Should correctly return 404 status if the orderId is more then 10 value for Get request', async () => {
    try {
      await superagent.get(`${baseUrl}/${orderIdInvalid}`)
    } catch (error: any) {
      expect(error.status).toBe(404);
    }
  });

  test('Should correctly return 200 status for POST request', async () => {
    try {
      response = await superagent.post(baseUrl).send(newValueForOrder);
    } catch (error: any) {
      throw new Error(error.message);
    }
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(newValueForOrder);
  });

  test('Should return status 400 if the data is invalid for POST request', async () => {
    try {
      await superagent.post(baseUrl).send(updatedValueForPetWrong);
    } catch (error: any) {
      expect(error.status).toBe(400);
      expect(error.response.body).toMatchObject(MESSAGE_MISSING_ERROR);
    }
  });

  test('Should correctly return 200 status if user updates pet for PUT request', async () => {
    try {
      response = await superagent.put(baseUrlForPUT).send(updatedValueForPet);
    } catch (error: any) {
      throw new Error(error.message);
    }
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedValueForPet);
  });

  test('Should correctly return 404 status if the wrong type is given to the pet name for PUT request', async () => {
    try {
      await superagent.put(baseUrlForPUT).send(updatedValueForPetWrong);
    } catch (error: any) {
      expect(error.status).toBe(404);
      expect(error.response.body).toMatchObject(MESSAGE_ERROR);
    }
  });

  test('Should correctly return 200 status if user delete existent orderID', async () => {
    try {
      response = await superagent.delete(`${baseUrl}/${orderId}`);
    } catch (error: any) {
      throw new Error(error.message);
    }
    expect(response.status).toBe(200);
  });

  test('Should correctly return 404 status if user delete non-existent orderID', async () => {
    try {
      await superagent.delete(`${baseUrl}/${orderIdInvalid}`);
    } catch (error: any) {
      expect(error.status).toBe(404);
      expect(error.response.body).toMatchObject(MESSAGE_DELETE_ERROR);
    }
  });
});
