# Playwright API Testing

A hands-on exercise repository for learning **API testing with Playwright**. Each exercise is a `*.spec.ts` file with guided comments and TODOs for you to fill in. Worked solutions live alongside them in the `solutions` folder.

The exercises run against two free, public sandbox APIs — no setup or keys required:

- [restful-booker](https://restful-booker.herokuapp.com/apidoc/index.html) — a hotel booking API (GET, POST, PUT, auth).
- [DummyJSON](https://dummyjson.com/docs/products) — a fake product API used for the Builder exercise.

Along the way you'll practice Playwright's `request` fixture, response assertions, and a few common test design patterns (Factory and Builder).

# Getting Started

1. Clone the repository
2. Run `npm install` in the terminal
3. Run the tests with `npm test` (or `npx playwright test`)

Open an exercise under [tests/exercises/](tests/exercises/), follow the comments, and compare with the matching file in [tests/exercises/solutions/](tests/exercises/solutions/) when you're done.

# Exercises

1. **GET call** — fetch a booking by ID and assert a 2xx response
2. **Parse response to JSON** — get all booking IDs and parse the body
3. **Chaining requests** — use a value from one response to drive the next
4. **POST and GET** — create a booking, then verify it via GET
5. **Factory pattern** — recreate the POST using a reusable factory function
6. **PUT with authentication** — get an auth token and update a booking
7. **Builder pattern** — assemble a complex product with a fluent builder, then POST it

# Project Layout

```
tests/
  exercises/            # exercises to complete
    solutions/          # reference solutions
  factory/              # shared helpers (BookingFactory, ProductBuilder)
playwright.config.ts    # Playwright configuration
```

# Build and Test

- [Running and debugging tests](https://playwright.dev/docs/running-tests)
- [Playwright API testing docs](https://playwright.dev/docs/api-testing)
