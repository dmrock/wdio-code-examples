import BlogPage from "../pages/blog-page"

describe("Blog", () => {
  it("Get the list of all recent posts & assert the lenght of eash post is > than 10 & assert the total length of the list = 5", async () => {
    await BlogPage.open()

    const recentPostsList = await BlogPage.listRecentPosts

    for (const post of recentPostsList) {
      const text = await post.getText()
      await expect(text.length).toBeGreaterThan(10)
    }

    // Optoin 1
    await expect(recentPostsList.length).toEqual(5)

    // Option 2
    // await expect(recentPostsList).toHaveLength(5)
  })
})
