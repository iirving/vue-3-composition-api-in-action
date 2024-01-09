import { computed } from "vue";

/**
 * Composable function for handling page requests.
 * @returns {Object} An object containing the makeRequest function and isLoading computed property.
 */
export default function usePageRequests() {
  const activeRequests = [];

  /**
   * Computed property that indicates whether there are active requests or not.
   * @type {Boolean}
   */
  const isLoading = computed(() => (activeRequests.length > 0 ? true : false));

  /**
   * Removes a request from the activeRequests array.
   * @param {String} request - The request to be removed.
   */
  const removeRequest = (request) => {
    const index = activeRequests.indexOf(request);
    if (index > -1) {
      activeRequests.splice(index, 1);
    }
  };

  /**
   * Makes a request to the specified URL.
   * @param {String} requestUrl - The URL to make the request to.
   * @returns {Promise} A promise that resolves with the response data.
   */
  const makeRequest = async (requestUrl) => {
    let data = null;
    // push url to the activeRequests array
    activeRequests.push(requestUrl);
    const response = await fetch(requestUrl)
      .then((response) => {
        data = response.json();
      })
      .catch((err) => {
        console.error("Error: " + err + " fetching data from " + requestUrl);
        alert(err);
      });
    // remove url from the activeRequests array
    removeRequest(requestUrl);
    return data;
  };

  return {
    makeRequest,
    isLoading,
  };
}
