import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator.js";

fetchProductCatalog() // returns a promise object
  .then((productCatalog) => {
    console.log("\n\n-------Catalogt:-------");
    console.log("Product " + productCatalog[0].id + ":");
    console.log(productCatalog);
    return fetchProductReviews(productCatalog[0].id); // returns a promise object
  })
  .catch((error) => console.error("Error:", error))
  .then((productReviews) => {
    if (productReviews.length === 0) {
        console.log("Review array is empty");
    }
    console.log("\n-------Review:-------");
    console.log("Reviews for Product " + productReviews[0].productId + ":");
    console.log(productReviews);
    return fetchSalesReport(); // returns a promise object
  })
  .catch((error) => console.error("Error:", error))
  .then((salesReport) => {
    console.log("\n-------Sales Report:-------");
    // console.log(salesReport[0].content);
  })
  .catch((error) => console.error("Error:", error))
  .finally(() => {
    console.log("Complete.");
  });
