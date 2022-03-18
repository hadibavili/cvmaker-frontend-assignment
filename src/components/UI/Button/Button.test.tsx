import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
   it("check button rendering successfully", async () => {
      const { getByText } = render(<Button>TestButtonRender</Button>);

      expect(getByText(/TestButtonRender/i)).toBeInTheDocument();
   });
});
