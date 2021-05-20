import { mocks } from "./mock";
export const restaurantsRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
restaurantsRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
