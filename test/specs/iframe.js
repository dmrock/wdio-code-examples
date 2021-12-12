describe("IFrame", () => {
  it("Working with iFrame", async () => {
    await browser.url("/iframe-sample")

    // access the iframe
    const iframe = await $("#advanced_iframe")
    await browser.switchToFrame(iframe)

    // verify logo exist
    await expect($("#site-logo")).toExist()

    // switch to parent frame
    await browser.switchToParentFrame()

    // verify page title
    await expect($("h1.tg-page-header__title")).toHaveText("IFrame Sample")
  })
})
