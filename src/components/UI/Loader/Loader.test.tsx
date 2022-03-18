import { customRender } from "../../../tests/test-utils";
import { waitForElementToBeRemoved } from "@testing-library/react";
import Countries from "../../../pages/Countries/Countries";

describe("Countries", () => {
   describe("When the fetch operation is pending", () => {
      it("show a loading", () => {
         const { getByTestId } = customRender(<Countries />);
         expect(getByTestId("spinner")).toBeInTheDocument();
      });

      it("hide loading", async () => {
         const { getByTestId } = customRender(<Countries />);

         // wait for fetching data
         await waitForElementToBeRemoved(() => getByTestId("spinner"), {
            timeout: 5000,
         });
      });
   });
});
