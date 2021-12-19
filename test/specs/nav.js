import HomePage from "../pages/home-page"
import allureReporter from "@wdio/allure-reporter"

describe("Navigation menu", () => {
  it("Get the text of all menu items & assert them", async () => {
    allureReporter.addFeature("Navigation")
    allureReporter.addSeverity("critical")

    await HomePage.open()

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
    const navLinks = await HomePage.NavComponent.linksNavMenu

    for (const link of navLinks) {
      actualLinks.push(await link.getText())
    }

    await expect(actualLinks).toEqual(expectedLinks)
  })

  it("Get the text of all menu items & assert them – using wait command", async () => {
    // hardcoded timeout
    // browser.pause(5000)
    await HomePage.open()

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ]

    const actualLinks = []

    // waitForDisplayed example
    // await $("#primary-menu").waitForDisplayed({ timeuot: 1000 })
    // waitForClickable example
    // await $("#primary-menu li").waitForClickable()

    // wait until the Home text is displayed no the navigation menu
    await browser.waitUntil(
      async function () {
        const homeText = await HomePage.NavComponent.firstNavMenuList.getText() // Home
        return homeText === "Home" // true | false
      },
      {
        timeout: 5000,
        timeoutMsg: "Could not verify the Home text from #primart-menu li",
      }
    )

    const navLinks = await HomePage.NavComponent.linksNavMenu

    for (const link of navLinks) {
      actualLinks.push(await link.getText())
    }

    await expect(actualLinks).toEqual(expectedLinks)
  })
})
