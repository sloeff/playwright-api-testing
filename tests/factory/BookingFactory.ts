import { APIRequestContext } from "@playwright/test";

interface Booking {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: BookingDates;
  additionalneeds: string;
}

interface BookingDates {
  checkin: Date;
  checkout: Date;
}

export interface BookingResponse {
  bookingid: number;
  booking: Booking;
}

export const defaultBooking: Booking = {
  firstname: "John",
  lastname: "Doe",
  totalprice: 100,
  depositpaid: false,
  bookingdates: { checkin: new Date(), checkout: new Date() },
  additionalneeds: "Breakfast",
};

export async function CreateBooking(
  request: APIRequestContext,
  bookingData: Partial<Booking> = {}
): Promise<BookingResponse> {
  // Combine the default booking with the data from the test.
  const requestBody: Booking = { ...defaultBooking, ...bookingData };

  const bookingResponse = await request.post(`https://restful-booker.herokuapp.com/booking`, {
    data: requestBody,
  });

  const responseJson = bookingResponse.json();
  // The parsed response is returned.
  return responseJson;
}
