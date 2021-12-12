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

  it.only("Upload on a hidden input field", async () => {
    await browser.url("/cart")

    const filePath = path.join(__dirname, "../data/wdio-logo.jpeg")
    const remoteFilePass = await browser.uploadFile(filePath)

    // remove hidden class
    await browser.execute(`document.querySelector('#upload_1').className = ''`)

    await $("#upfile_1").setValue(remoteFilePass)
    await $("#upload_1").click()

    await expect($("#wfu_messageblock_header_1_label_1")).toHaveTextContaining(
      "uploaded successfully"
    )
  })
})
