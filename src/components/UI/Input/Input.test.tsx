import { render } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
   it("check input rendering successfully", async () => {
      const { getByPlaceholderText } = render(
         <Input
            placeholder={"placeholderTest"}
            onChange={function (value: string): void {}}
         />
      );

      expect(getByPlaceholderText(/placeholderTest/i)).toBeInTheDocument();
   });
});
