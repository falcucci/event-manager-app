import _ from "lodash";
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


/**
 * Makes an API request to the specified path.
 * 
 * @param {Object} params - The parameters for the API request.
 * @param {string} params.path - The path of the API request.
 * @param {string} params.method - The HTTP method of the API request.
 * @param {Object} params.body - The body of the API request.
 * @param {Object} params.headers - The headers of the API request.
 * @param {string} params.access - The access token for the API request.
 * @param {string} params.refresh - The refresh token for the API request.
 * 
 * @returns {Promise} - The response from the API request.
 */
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
  if (_.includes(["POST", "PUT", "PATCH"], method)) {
    headers["Content-Type"] = "application/json";
  }
  return await fetch(url, params);
}
