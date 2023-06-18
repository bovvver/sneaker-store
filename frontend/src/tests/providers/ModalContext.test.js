import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalContext, { useModal } from "../../providers/ModalContext";

describe("NavContext", () => {
  test("should show modal on click", async () => {
    let context;

    const TestComponent = () => {
      context = useModal();
      const { handleModalState } = context;

      return (
        <div
          onClick={() => {
            handleModalState("test");
          }}
        >
          Open
        </div>
      );
    };

    render(
      <ModalContext>
        <TestComponent />
      </ModalContext>
    );

    expect(context.modalState).toBe(false);
    await userEvent.click(screen.getByText("Open"));
    expect(context.modalState).toBe(true);
  });
});
