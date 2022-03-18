import { render } from "@testing-library/react";
import { Warning } from "./Warning";

describe("Warning", () => {
   it("check warning component rendering successfully", async () => {
      const { getByText } = render(<Warning message="testErrorMessage" />);

      expect(getByText(/testErrorMessage/i)).toBeInTheDocument();
   });
});
