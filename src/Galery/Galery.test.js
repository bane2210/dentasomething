import React from "react";
import Galery from "./Galery";
import { findByTestId, render, screen, waitFor } from "@testing-library/react";

describe.only("Galery Component", () => {
  test("coollightbox not visible on mount", async () => {

    render(<Galery />);

    setTimeout(() => {}, 3000);

    await waitFor(async () => {
      console.log(1);
      expect(await (await screen.findByTestId('mainsection')).querySelector('.wraper')).toBeInTheDocument();
    }, {timeout: 3000, interval: 500});

  });
});
