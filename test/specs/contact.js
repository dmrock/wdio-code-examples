import ContactPage from "../pages/contact-page"
import * as faker from "faker"

describe("Contact form", () => {
  it("Fill the form, submit & assert the success message", async () => {
    await ContactPage.open()

    await ContactPage.submitForm(
      faker.name.findName(),
      faker.internet.email(),
      faker.phone.phoneNumber(),
      faker.lorem.paragraphs(2)
    )

    const successAlert = ContactPage.alertSuccess

    await expect(successAlert).toHaveTextContaining(
      "Thank you for contacting us! We will be in touch with you shortly"
    )
  })
})
