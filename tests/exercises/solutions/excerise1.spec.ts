import { test, expect } from "@playwright/test";

/* Exercise 1
// API-DOCS: https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-GetBooking
// Write a test that gets a booking by ID from "https://restful-booker.herokuapp.com/booking/:id"
// and verify that the response is in the http 2xx status range (https://playwright.dev/docs/api/class-apiresponseassertions#api-response-assertions-to-be-ok)
// Log the response to the console (console.log())
*/
test("Get booking by ID", async ({ request }) => {
  const response = await request.get("https://restful-booker.herokuapp.com/booking/1");
  expect(response).toBeOK();
  console.log(response);
});
