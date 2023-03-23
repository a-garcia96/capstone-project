import { fireEvent, getByText, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm/BookingForm";
import Main from "./components/Main";

test("Renders the BookingForm Heading", () => {
  render(
    <Main>
      <BookingForm />
    </Main>
  );
  const headingElement = screen.getByText("Book");
  expect(headingElement).toBeInTheDocument();
});

test("fills out and submits the form", () => {
  render(
    <Main>
      <BookingForm />
    </Main>
  );

  const dateInput = screen.getByTestId("dateInput");
  const timeInput = screen.getByTestId("timeInput");
  const guetsInput = screen.getByTestId("guestInput");
  const occasionInput = screen.getByTestId("occasionInput");

  fireEvent.change(dateInput, { target: { value: "2023-03-24" } });
  fireEvent.change(timeInput, { target: { value: "10:00 AM" } });
  fireEvent.change(guetsInput, { target: { value: "2" } });
  fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

  //SUBMIT THE FORM
  const submitButton = screen.getByText("Book");
  fireEvent.click(submitButton);

  //WAIT FOR THE FORM SUBMISSION TO BE PROCESSED
  const confirmationHeader = screen.getByText(
    "Thank you for your reservation!"
  );
  expect(confirmationHeader).toBeInTheDocument();
});

test("confirm required attributes are on input fields", () => {
  render(
    <Main>
      <BookingForm />
    </Main>
  );

  const dateInput = screen.getByTestId("dateInput");
  const timeInput = screen.getByTestId("timeInput");
  const guetsInput = screen.getByTestId("guestInput");
  const occasionInput = screen.getByTestId("occasionInput");

  expect(dateInput).toBeInvalid();
  expect(timeInput).toBeInvalid();

  fireEvent.change(dateInput, { target: { value: "2023-03-24" } });
  fireEvent.change(timeInput, { target: { value: "17:00" } });

  expect(dateInput).toBeValid();
  expect(timeInput).toBeValid();

});
