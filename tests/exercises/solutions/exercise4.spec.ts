import { test, expect } from "@playwright/test";

/* Exercise 4
// Create a booking via the POST method
// After creation, verify the details via GetBooking API.
// You will need the bookingID to collect the details
// Docs: https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-CreateBooking
*/

test("Create a new booking", async ({ request }) => {
  // Create a variable to store the booking ID
  let bookingID: any;

  const response = await request.post(`https://restful-booker.herokuapp.com/booking`, {
    // The data section hold the body of the POST request
    data: {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: "2025-01-01",
        checkout: "2025-01-07",
      },
      additionalneeds: "Breakfast",
    },
  });
  await expect(response).toBeOK();
  const responseBody = await response.json();
  bookingID = responseBody.bookingid;

  const booking = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`);
  await expect(booking).toBeOK();
  const bookingDetails = await booking.json();
  expect(bookingDetails.firstname).toBe("Jim");
  expect(bookingDetails.lastname).toBe("Brown");
});
