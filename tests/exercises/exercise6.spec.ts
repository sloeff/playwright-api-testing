import { expect, test } from "@playwright/test";
import { CreateBooking } from "../factory/BookingFactory";

/* Exercise 6
// Update an existing booking with PUT. This requires authentication.
// 1. Create a booking (reuse the factory from exercise 5) and store its bookingid
// 2. Get an auth token via POST "https://restful-booker.herokuapp.com/auth"
// 3. Parse the token out of the auth response
// 4. PUT the booking at "/booking/:id" with a full new body and the token
//    Note: restful-booker expects the token in a "Cookie" header: `token=<token>`
// 5. Verify the PUT response (2xx) and that a changed field came back updated
// Auth docs: https://restful-booker.herokuapp.com/apidoc/index.html#api-Auth-CreateToken
// Docs: https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-UpdateBooking
*/

test("Update a booking with auth", async ({ request }) => {
  // Create a booking to update and store the bookingid
  const createBooking = await CreateBooking({ firstname: "John" });
  const bookingID = createBooking.bookingid;

  // Get an auth token, see docs. The body holds the username and password

  // Parse the response to a JSON and store the token in a variable

  // PUT the booking with a new body. Pass the token in the headers as a Cookie
  // hint: headers: { Cookie: `token=${token}` }
  const updatedBooking = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingID}`, {
    // data holds the full replacement body
    // headers holds the auth Cookie
  });

  // Verify the response is ok and the updated field is present
});
