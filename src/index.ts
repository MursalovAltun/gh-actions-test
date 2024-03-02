import fs from "fs/promises";

(async () => {
  try {
    fs.mkdir("dependencies", { recursive: true });
    await fs.writeFile("dependencies/test.txt", "test");

    console.log(
      await fs.readFile("dependencies/test.txt", { encoding: "utf8" })
    );
  } catch (error) {
    console.log(error);
  }
})();
