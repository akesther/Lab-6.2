export class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

export class DataError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataError";
  }
}

export function fetchProductCatalog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ]);
      } else {
        reject("Failed to fetch product catalog");
        throw new DataError("Failed to fetch product catalog");
      }
    }, 1000);
  });
}

export function fetchProductReviews(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.4) {
        const review = [
          { productId: 1, rating: 5, content: "It was a nice Laptop!" },
          { productId: 2, rating: 7, content: "Great Headphones!" },
          { productId: 3, rating: 3, content: "Bad Laptop! Broke!" },
        ].filter((item) => item.productId == id);

        resolve(review);
      } else {
        reject(`Failed to fetch reviews for product ID ${id}`);
        throw new NetworkError(
          `Failed to fetch reviews for product ID ${productId}`,
        );
      }
    }, 1500);
  });
}

export function fetchSalesReport() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        resolve({ totalSales: 25000, unitsSold: 50, averagePrice: 500 });
      } else {
        reject("Failed to fetch sales report");
      }
    }, 1500);
  });
}
