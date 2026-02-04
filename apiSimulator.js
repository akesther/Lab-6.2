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
        // ].filter(item => item.id == item.id) console.log(item);
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
        const reviews = [
          { productId: 1, rating: 5, content: "Great Laptop!" },
          { productId: 2, rating: 7, content: "Great Headphones!" },
          { productId: 3, rating: 3, content: "Great Laptop! !" },
        ].filter((item) => item.productId == id);

        resolve(reviews);
      } else {
        reject(`Failed to fetch reviews for product ID ${id}`);
        throw new NetworkError(
          `Failed to fetch reviews for product ID ${id}`,
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
