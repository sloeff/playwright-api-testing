import { expect, test } from "@playwright/test";
import { ProductBuilder } from "../factory/ProductBuilder";

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
  // Build a product. Chain the builder methods to set fields and add tags/reviews
  const product = new ProductBuilder().build();

  // POST the built product. The data section holds the product body
  const response = await request.post("https://dummyjson.com/products/add", {
    data: product,
  });

  // Verify the response is ok and an id was returned
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
  // Start from the ready-made wireless keyboard product, override only the price
  const product = ProductBuilder.wirelessKeyboard().build();

  // POST the product

  // Verify the response is ok, the overridden field changed, and a preset field remains
});
