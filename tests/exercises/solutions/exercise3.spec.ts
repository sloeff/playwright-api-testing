import { expect, test } from "@playwright/test";

/* Exercise 3
// Get a specific booking based upon the booking id provided from GetBookingIds API
// Docs: https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-GetBooking
// 1. Call the booking API to get ALL bookings
// 2. Parse the response into a JSON
// 3. Store the first booking id into the variable `bookingID`
// 4. Use the variable to get booking details
// 5. Parse the response of get booking into a JSON
// 6. Verify the first and lastname in the response
*/

test("Get booking details", async ({ request }) => {
  // BookingID variable for later use
  let bookingID: any;
  //Store the bookings response to a constant
  const responseBookings = await request.get("https://restful-booker.herokuapp.com/booking");
  // Expect that the response is in the http 2xx range
  await expect(responseBookings).toBeOK();
  // Parse the response to a JSON we can use to verify attributes
  const responseBookingsBody = await responseBookings.json();
  // Store the bookingid to the variable
  bookingID = responseBookingsBody[0].bookingid;

  // Get the booking using the ID from the bookingID variable
  const responseBookingDetails = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`);
  // Expect that the response is in the http 2xx range
  await expect(responseBookingDetails).toBeOK();
  // Parse the response to a JSON we can use to verify attributes
  const responseDetailsBody = await responseBookingDetails.json();
  // Verify the first and lastname from the response
  expect(responseDetailsBody.firstname).toBe("Jake");
  expect(responseDetailsBody.lastname).toBe("Smith");
});
