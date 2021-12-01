describe("Navigation menu", () => {
  it("Get the text of all menu items & assert them", async () => {
    await browser.url("/")

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ]

    const actualLinks = []

    // const navLinks = await $("#primary-menu").$$("li[id *= menu]")
    const navLinks = await $$("#primary-menu li[id *= menu]")

    for (const link of navLinks) {
      actualLinks.push(await link.getText())
    }

    await expect(actualLinks).toEqual(expectedLinks)
  })
})
