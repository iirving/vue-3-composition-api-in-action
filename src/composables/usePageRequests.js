import { computed } from "vue";
const activeRequests = [];

export default function usePageRequests() {
  const isLoading = computed(() => (activeRequests.length > 0 ? true : false));

  const removeRequest = (request) => {
    const index = activeRequests.indexOf(request);
    if (index > -1) {
      activeRequests.splice(index, 1);
    }
  };

  const makeRequest = async (requestUrl) => {
    let data = null;
    // push url to the activeRequests array
    activeRequests.push(requestUrl);
    const response = await fetch(requestUrl)
      .then((response) => {
        data = response.json();
      })
      .catch((err) => {
        console.error("Error: " + err + " fecting data from " + requestUrl);
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
