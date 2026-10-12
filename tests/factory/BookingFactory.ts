import { request as playwrightRequest } from "@playwright/test";

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

export async function CreateBooking(bookingData: Partial<Booking> = {}): Promise<BookingResponse> {
  const request = await playwrightRequest.newContext();
  // Combine the default booking with the data from the test.
  const requestBody: Booking = { ...defaultBooking, ...bookingData };

  const bookingResponse = await request.post(`https://restful-booker.herokuapp.com/booking`, {
    data: requestBody,
  });

  const responseJson = await bookingResponse.json();
  // The parsed response is returned.
  return responseJson;
}
