const path = require("path")

describe("Upload tests", () => {
  it("Simple upload test", async () => {
    await browser.url("https://the-internet.herokuapp.com/upload")

    // store test file pass
    const filePath = path.join(__dirname, "../data/wdio-logo.jpeg")

    // upload test file
    const remoteFilePass = await browser.uploadFile(filePath)

    // set file path value in the input field
    await $("#file-upload").setValue(remoteFilePass)
    await $("#file-submit").click()

    // assertion
    await expect($("h3")).toHaveText("File Uploaded!")
  })
})
