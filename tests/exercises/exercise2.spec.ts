import { test, expect } from "@playwright/test";

/* Exercise 2
// Get booking ALL ids from "https://restful-booker.herokuapp.com/booking"
// API Docs https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-GetBookings
// Playwright API testing https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-get
// Parse response to a JSON object (https://playwright.dev/docs/api/class-apiresponse#api-response-json)
*/

test("Get booking IDs", async ({ request }) => {
  // Get all bookings and store them in a constant for later use

  // Parse the response to a JSON we can use to verify attributes
  // The command is not complete. hint: https://playwright.dev/docs/api/class-apiresponse#api-response-json
  const responseBody = await response;
});
