import {
   cleanup,
   fireEvent,
   waitFor,
   waitForElementToBeRemoved,
} from "@testing-library/react";
import { customRender } from "../../tests/test-utils";
import Countries from "./Countries";

describe("Countries", () => {
   describe("checking search component rendered", () => {
      it("check keyword exist", async () => {
         const { getByText } = customRender(<Countries />);

         expect(getByText(/keyword/i)).toBeInTheDocument();
      });

      it("write iran word in search and should show one country", async () => {
         const { getByPlaceholderText, getByTestId, getAllByText } =
            customRender(<Countries />);

         await waitForElementToBeRemoved(() => getByTestId("spinner"), {
            timeout: 5000,
         });

         const input = getByPlaceholderText(/Example/i) as HTMLInputElement;
         fireEvent.change(input, { target: { value: "iran" } });

         await waitFor(() => {
            expect(expect(getAllByText(/Continent/i).length).toBe(1));
         });
      });

      it("check list rendered", async () => {
         const { getAllByText } = customRender(<Countries />);

         expect(getAllByText(/Continent/i).length).toBe(250);
         cleanup();
      });

      // it("Modal should be shown", async () => {
      //    const { getAllByText, getByText, getByTestId } = customRender(
      //       <Countries />
      //    );

      //    const portalRoot = document.createElement("div");
      //    portalRoot.setAttribute("id", "modal");
      //    document.body.append(portalRoot);

      //    const firstButton = getAllByText(
      //       /See Details/i
      //    )[0] as HTMLButtonElement;

      //    fireEvent.click(firstButton);

      //    expect(getByText(/code/i)).toBeInTheDocument();
      // });
   });
});
