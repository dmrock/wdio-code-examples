import ContactPage from "../pages/contact-page"

describe("Contact form", () => {
  it("Fill the form, submit & assert the success message", async () => {
    await ContactPage.open()

    await ContactPage.submitForm(
      "Ivan",
      "i.ivanov@gmail.com",
      "+79687777777",
      "Some text message..."
    )

    const successAlert = ContactPage.alertSuccess

    await expect(successAlert).toHaveTextContaining(
      "Thanks for contacting us! We will be in touch with you shortly"
    )
  })
})
