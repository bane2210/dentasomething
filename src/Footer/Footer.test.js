import Footer from "./Footer";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe.skip("Footer component", () => {
  test("will render all wright texts", () => {
    render(<Footer />);

    let elements = screen.getAllByRole("heading", { level: 1 });
    // screen.getByText("Bambi Play dečja", {exact: false});
    expect(elements[0].innerHTML).toMatch("Bambi Play dečja igraonica");

    elements = screen.getAllByRole("heading", { level: 2 });
    expect(elements[0].innerHTML).toMatch("Kontakt");
    expect(elements[1].innerHTML).toMatch("Radno vreme");
    expect(elements[2].innerHTML).toMatch("Adresa");
  });

  test("testing className", async () => {
    render(<Footer />);
    expect((await screen.findByTestId("footer-id")).childNodes[0]).toHaveClass("cover_container");
  });
});
