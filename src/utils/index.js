/**
 *
 * takes a promise and returns the promise's data on success or
 * an error on failure.
 *
 * @param {Promise} promise - The promise to be handled
 *
 * @returns {Array} - An array with the first element being either
 * an error or null and the second element being either the data
 * or the error.
 */
export const promiseHandler = promise => {
  return promise.then(data => [null, data]).catch(err => [err]);
};

export const api = async ({
  path = "",
  method = "GET",
  body,
  headers = {},
  access,
  refresh
}) => {
  const url = `http://localhost:8000/api/${path}`;
  const params = {
    method,
    headers,
  }

  if (typeof body === "object") {
    body = JSON.stringify(body);
    params.body = body;
  }

  headers["Authorization"] = `Bearer ${access}`;

  if (method === "POST") {
    headers["Content-Type"] = "application/json";
  }

  return await fetch(url, params);
}



//  const apiCall = async (params) => {
//    const [fetchError, fetchData] = await promiseHandler(api(params));
//    console.log('fetchData: ', fetchData);
//    const [error, data] = await promiseHandler(fetchData.json());
//    if (error) console.log(error);
//    console.log('data: ', data);
//    return data;
//  }
