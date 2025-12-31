import { expect, test } from "@playwright/test";

/* Exercise 3
// Get a specific booking based upon the booking id provided from GetBookingIds API
// Docs: https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-GetBooking
// 1. Call the booking API
// 2. Parse the response into a JSON
// 3. Store the first booking ID into a variable
// 4. Use the variable to get booking details
// 5. Parse the response of get booking into a JSON
// 6. Verify the first and lastname in the response
*/

test("Get booking details", async ({ request }) => {
  // Define bookingID variable for later use
  let bookingID;
  //Store the response for booking to a constant
  const responseBookings = await request.get("https://restful-booker.herokuapp.com/booking");

  // Parse the response to a JSON we can use to verify attributes
  // Complete the command, see exercise 1
  const responseBookingsBody = await responseBookings;

  // Store the bookingid to the variable, complete the command
  bookingID = responseBookingsBody;

  // Get the booking using the ID from the bookingID variable
  const responseBookingDetails = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`);
});
