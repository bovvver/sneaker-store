import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavContext, { useNav } from "../../providers/NavContext";

describe("NavContext", () => {
  test("should toggle the open state when handleNavClick is called", async () => {
    let context;

    const TestComponent = () => {
      context = useNav();
      const { handleNavClick } = context;
      return <div onClick={handleNavClick}>Test navigation</div>;
    };

    render(
      <NavContext>
        <TestComponent />
      </NavContext>
    );

    expect(context.state).toBe(false);
    await userEvent.click(screen.getByText("Test navigation"));
    expect(context.state).toBe(true);
    await userEvent.click(screen.getByText("Test navigation"));
    expect(context.state).toBe(false);
  });

  test("should update scroll value on window scroll event", () => {
    let context;

    const TestComponent = () => {
      context = useNav();
      return <div>test</div>;
    };

    render(
      <NavContext>
        <TestComponent />
      </NavContext>
    );

    expect(context.scroll).toBe(0);
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(context.scroll).toBe(100);
    fireEvent.scroll(window, { target: { scrollY: 200 } });
    expect(context.scroll).toBe(200);
  });
});
