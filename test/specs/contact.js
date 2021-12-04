describe("Contact form", () => {
  it("Fill the form, submit & assert the success message", async () => {
    await browser.url("/contact")

    await $(".contact-name input").addValue("Ivan")
    await $(".contact-email input").addValue("i.ivanov@gmail.com")
    await $(".contact-phone input").addValue("+79687777777")
    await $(".contact-message textarea").addValue("Some text message...")
    await $("button[type=submit]").click()

    const successAlert = $("[role=alert")

    await expect(successAlert).toHaveTextContaining(
      "Thanks for contacting us! We will be in touch with you shortly"
    )
  })
})
