import { expect, test } from "@playwright/test";
import { CreateBooking } from "../../factory/BookingFactory";

/* Exercise 6
// Update an existing booking with PUT. This requires authentication.
// 1. Create a booking (reuse the factory from exercise 5) and store its bookingid
// 2. Get an auth token via POST "https://restful-booker.herokuapp.com/auth"
// 3. Parse the token out of the auth response
// 4. PUT the booking at "/booking/:id" with a full new body and the token
// 5. Verify the PUT response (2xx) and that a changed field came back updated
// Auth docs: https://restful-booker.herokuapp.com/apidoc/index.html#api-Auth-CreateToken
// Docs: https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-UpdateBooking
*/

test("Update a booking with auth", async ({ request }) => {
  // Create a booking to update and store the bookingid
  const createBooking = await CreateBooking({ firstname: "John" });
  const bookingID = createBooking.bookingid;

  // Get an auth token, the body holds the username and password
  const authResponse = await request.post(`https://restful-booker.herokuapp.com/auth`, {
    data: {
      username: "admin",
      password: "password123",
    },
  });
  await expect(authResponse).toBeOK();

  // Parse the response to a JSON and store the token in a variable
  const authBody = await authResponse.json();
  const token = authBody.token;

  // PUT the booking with a new body. Pass the token in the headers as a Cookie
  // Note: restful-booker expects the token in a "Cookie" header: `token=<token>`
  const updatedBooking = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingID}`, {
    headers: {
      Cookie: `token=${token}`,
    },
    data: {
      firstname: "Jane",
      lastname: "Smith",
      totalprice: 500,
      depositpaid: true,
      bookingdates: {
        checkin: "2025-01-01",
        checkout: "2025-01-07",
      },
      additionalneeds: "Lunch",
    },
  });

  // Verify the response is ok and the updated fields came back
  await expect(updatedBooking).toBeOK();
  const updatedBody = await updatedBooking.json();
  expect(updatedBody.firstname).toBe("Jane");
  expect(updatedBody.lastname).toBe("Smith");
  expect(updatedBody.totalprice).toBe(500);
});
