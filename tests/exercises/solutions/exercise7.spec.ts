import { expect, test } from "@playwright/test";
import { ProductBuilder } from "../../factory/ProductBuilder";

/* Exercise 7
// Use the Builder pattern to assemble a complex product, then POST it.
// The ProductBuilder is provided for you (see tests/factory/ProductBuilder.ts).
// 1. Build a product using the fluent chain: .withTitle(...).withPrice(...).addTag(...).build()
// 2. POST the built product to "https://dummyjson.com/products/add"
// 3. Verify the response is 2xx and an id was returned
// Note: DummyJSON simulates the POST. It returns a new id and echoes back the
//       fields it models, but does not persist or compute anything.
// Docs: https://dummyjson.com/docs/products#products-add
*/

test("Create a product with a builder", async ({ request }) => {
  // Build a complex product step by step. The arrays grow via addTag / addReview
  const product = new ProductBuilder()
    .withTitle("Builder Widget")
    .withPrice(49.99)
    .withDimensions(10, 20, 5)
    .addTag("tools")
    .addTag("featured")
    .addReview(5, "Excellent build quality", "Jane Doe")
    .addReview(4, "Does the job", "John Smith")
    .build();

  // The builder produced the shape we expect before any request is sent
  expect(product.tags).toHaveLength(2);
  expect(product.reviews).toHaveLength(2);
  expect(product.dimensions).toEqual({ width: 10, height: 20, depth: 5 });

  // POST the built product
  const response = await request.post("https://dummyjson.com/products/add", {
    data: product,
  });

  // Verify the response is ok and a new id was returned
  await expect(response).toBeOK();
  const responseBody = await response.json();
  expect(responseBody.id).toBeDefined();
  // DummyJSON echoes back the fields it models
  expect(responseBody.title).toBe("Builder Widget");
});

/* Exercise 7b
// Building every field by hand gets repetitive when a test only cares about one.
// ProductBuilder.wirelessKeyboard() hands you a full, valid product in one call,
// and the name tells you exactly what product that is.
// Because the chained setter runs after the preset, you can override a single
// field and leave the rest intact.
// 1. Start from ProductBuilder.wirelessKeyboard()
// 2. Override just the price (.withPrice(...)) and build()
// 3. POST it and verify the response is 2xx with an id
// 4. Verify the price you set came back, and a field you did NOT touch (e.g. title)
//    still holds the preset value
*/

test("Create a complete product and override one field", async ({ request }) => {
  const product = ProductBuilder.wirelessKeyboard().withPrice(999.99).build();

  expect(product.price).toBe(999.99);
  expect(product.title).toBe("Wireless Keyboard");
  expect(product.tags.length).toBeGreaterThan(0);
  expect(product.reviews.length).toBeGreaterThan(0);

  // POST the product
  const response = await request.post("https://dummyjson.com/products/add", {
    data: product,
  });

  // Verify the response, the overridden field, and an untouched preset field
  await expect(response).toBeOK();
  const responseBody = await response.json();
  expect(responseBody.id).toBeDefined();
  expect(responseBody.price).toBe(999.99);
  expect(responseBody.title).toBe("Wireless Keyboard");
});
