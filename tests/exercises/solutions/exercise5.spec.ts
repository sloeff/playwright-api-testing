import { expect, test } from "@playwright/test";
import { CreateBooking, defaultBooking } from "../../factory/BookingFactory";

/* Exercise 5
// Remake the test from exercise 4 but using a factory class for the post
// Edit the body (data) in the CreateBooking function to your like
// Use a GET to verify your changes are present in the booking
*/

test("Create POST with a factory Class", async ({ request }) => {
  // Create a new booking via the CreateBooking function, the body can be altered to your wishes
  const createBooking = await CreateBooking({ totalprice: 200 });
  // Verify that a bookingId is returned
  expect(createBooking.bookingid).toBeDefined();
  // Store the bookingid to the bookingid constant
  const bookingid = createBooking.bookingid;

  // get the booking via the bookingid constant
  const getBooking = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);
  // Parse the response to a json we can use to verify attributes
  const bookingJson = await getBooking.json();
  // Verify that the first and lastname are equal to the first and lastname in the factory class
  expect(bookingJson.firstname).toBe(defaultBooking.firstname);
  expect(bookingJson.lastname).toBe(defaultBooking.lastname);
  // Verify that the totalprice is equal to the totalprice we've "overwritten"
  expect(bookingJson.totalprice).toBe(200);
});
