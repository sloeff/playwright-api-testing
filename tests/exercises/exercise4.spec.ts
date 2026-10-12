import { test, expect } from "@playwright/test";

/* Exercise 4
// Create a booking via the POST method
// After creation, verify the details via GetBooking API.
// You will need the bookingID to collect the details
// Docs: https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-CreateBooking
*/

test("Create a new booking", async ({ request }) => {
  let bookingID;
  // Set the endpoint of the POST, see docs
  const response = await request.post("", {
    // The data section hold the body of the POST request
    data: {},
  });

  // Get the booking details by using the bookingID variable
  const booking = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`);
});
