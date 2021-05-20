import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  return camelize(result);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(camelize(transformedResponse));
  })
  .catch((err) => {
    console.log(err);
  });
