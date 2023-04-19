// Function to parse the query string
function getQueryStringParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Set the global variable based on the query string
let gameSource = null;

document.addEventListener('DOMContentLoaded', () => {
  gameSource = getQueryStringParameter('source');
  console.log(`Game source: ${gameSource}`);
});
