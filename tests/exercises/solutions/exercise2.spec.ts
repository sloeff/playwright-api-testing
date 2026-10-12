import { expect, test } from "@playwright/test";

/* Exercise 2
// Get booking ids from "https://restful-booker.herokuapp.com/booking"
// API Docs https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-GetBookings
// Playwright API testing https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-get
// Parse response to a JSON object (https://playwright.dev/docs/api/class-apiresponse#api-response-json)
*/

test("Get booking IDs", async ({ request }) => {
  // Store the response for booking to a constant
  const response = await request.get("https://restful-booker.herokuapp.com/booking");
  // Expect that the response is in the http 2xx range
  await expect(response).toBeOK();
  // Parse the response to a JSON we can use to verify attributes
  const responseBody = await response.json();
  // Log the parsed response to console for easy readability
  console.log(responseBody);
});
