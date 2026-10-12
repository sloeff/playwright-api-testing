export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  reviewerName: string;
}

export interface Product {
  title: string;
  price: number;
  stock: number;
  brand: string;
  tags: string[];
  dimensions: Dimensions;
  reviews: Review[];
}

/*
// The Builder pattern constructs an object step by step through chained methods,
// then returns the finished object from build().
//
// Each "with" method sets a field and returns `this` so calls can be chained.
// Each "add" method pushes onto an array and returns `this`.
// build() returns the assembled product.
*/
export class ProductBuilder {
  // Start from sensible defaults so a test only sets what it cares about
  private product: Product = {
    title: "Default Product",
    price: 10,
    stock: 1,
    brand: "ACME",
    tags: [],
    reviews: [],
    dimensions: { width: 1, height: 1, depth: 1 },
  };

  withTitle(title: string): this {
    this.product.title = title;
    return this;
  }

  withPrice(price: number): this {
    this.product.price = price;
    return this;
  }

  withDimensions(width: number, height: number, depth: number): this {
    this.product.dimensions = { width, height, depth };
    return this;
  }

  addTag(tag: string): this {
    this.product.tags.push(tag);
    return this;
  }

  addReview(rating: number, comment: string, reviewerName: string): this {
    this.product.reviews.push({ rating, comment, reviewerName });
    return this;
  }

  build(): Product {
    return this.product;
  }

  // A ready-made, fully populated product for a wireless keyboard.
  static wirelessKeyboard(): ProductBuilder {
    return new ProductBuilder()
      .withTitle("Wireless Keyboard")
      .withPrice(79.99)
      .withDimensions(44, 13, 3)
      .addTag("electronics")
      .addTag("accessories")
      .addReview(5, "Fast and reliable", "Ada Lovelace")
      .addReview(4, "Good value", "Alan Turing");
  }
}
