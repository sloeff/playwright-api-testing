import { expect, test } from "@playwright/test";
import { CreateBooking, defaultBooking } from "../factory/BookingFactory";

/* Exercise 5
// Remake the test from exercise 4 but using a factory class for the post
// Edit the body (data) in the CreateBooking function to your like
// Use a GET to verify your changes are present in the booking
*/

test("Create POST with a factory Class", async ({ request }) => {
  // Create a new booking via the CreateBooking function, the body can be altered to your wishes
  const createBooking = await CreateBooking(request, { totalprice: 200 });
  // Verify that a bookingId is returned
  expect(createBooking.bookingid).toBeDefined();
  // Store the bookingid to the bookingID constant
  const bookingID = createBooking.bookingid;

  // get the booking details
  const getBooking = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`);
  // Parse the response to a json we can use to verify attributes
  const bookingJson = await getBooking.json();
  // Log the parsed response for easy readability
  console.log(bookingJson);
});
