import { getImage } from "../src";

describe("Test Giphy getImage", () => {
  test("getImage debe de retornar un URL de la imagen", async () => {
    const url = await getImage();
    console.log(url);

    expect(typeof url).toBe("string");
  });
});
