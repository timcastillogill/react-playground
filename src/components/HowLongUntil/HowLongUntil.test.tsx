import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HowLongUntil from "./HowLongUntil";

describe("HowLongUntil", () => {
  describe.each([["Hello World"], ["Laurence's Birthday"], ["Tim's Birthday"]])(
    "Given the user has typed '%s' and hit a button",
    (text) => {
      test(`Then it will display '${text}'`, () => {
        render(<HowLongUntil />);

        userEvent.type(screen.getByRole("textbox"), text);
        userEvent.click(screen.getByRole("button", { name: "Add Occasion" }));
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    }
  );

  describe("Given the user wants to add a new event", () => {
    test("Then a button called 'Add Event' is shown", () => {
      render(<HowLongUntil />);
      expect(
        screen.getByRole("button", { name: "Add Occasion" })
      ).toBeInTheDocument();
    });

    describe.each([["New Occasion 1"], ["New Occasion 2"], ["New Occasion 3"]])(
      "Given the user wants to add new events",
      (text) => {
        test(`Then ${text} is listed on the screen`, () => {
          render(<HowLongUntil />);
          userEvent.type(screen.getByRole("textbox"), text);
          userEvent.click(screen.getByRole("button", { name: "Add Occasion" }));

          expect(screen.getByRole("cell", { name: text })).toBeInTheDocument();
        });
      }
    );

    describe("When the user has typed event names and hit 'Add Event'", () => {
      test("Then two event names will be listed on the screen", () => {
        render(<HowLongUntil />);
        userEvent.type(screen.getByRole("textbox"), "New Occasion 1");
        userEvent.click(screen.getByRole("button", { name: "Add Occasion" }));
        userEvent.type(screen.getByRole("textbox"), "New Occasion 2");
        userEvent.click(screen.getByRole("button", { name: "Add Occasion" }));

        const occasion1 = screen.getByRole("cell", {
          name: "New Occasion 1",
        });
        const occasion2 = screen.getByRole("cell", {
          name: "New Occasion 2",
        });
        expect(occasion1).toBeInTheDocument();
        expect(occasion2).toBeInTheDocument();
      });

      test("Then three event names will be listed on the screen", () => {
        render(<HowLongUntil />);
        userEvent.type(screen.getByRole("textbox"), "New Occasion 1");
        userEvent.click(screen.getByRole("button", { name: "Add Occasion" }));
        userEvent.type(screen.getByRole("textbox"), "New Occasion 2");
        userEvent.click(screen.getByRole("button", { name: "Add Occasion" }));
        userEvent.type(screen.getByRole("textbox"), "New Occasion 3");
        userEvent.click(screen.getByRole("button", { name: "Add Occasion" }));

        const occasion1 = screen.getByRole("cell", {
          name: "New Occasion 1",
        });
        const occasion2 = screen.getByRole("cell", {
          name: "New Occasion 2",
        });
        const occasion3 = screen.getByRole("cell", {
          name: "New Occasion 3",
        });
        expect(occasion1).toBeInTheDocument();
        expect(occasion2).toBeInTheDocument();
        expect(occasion3).toBeInTheDocument();
      });
    });
  });

  describe.each([["2024-06-25"], ["2032-01-19"], ["2032-01-23"]])(
    "Given the user has entered a date and hit 'Add Event'",
    (text) => {
      test(`Then the date: ${text} is listed on the screen`, () => {
        render(<HowLongUntil />);
        const dateInput = screen.getByLabelText("occasionDate");
        fireEvent.change(dateInput, { value: text });
        userEvent.click(screen.getByRole("button", { name: /add occasion/i }));

        expect(screen.getByLabelText("dateColumn")).toBeInTheDocument();
        expect(screen.getByLabelText("timeUntil")).toBeInTheDocument();
      });
    }
  );
});
