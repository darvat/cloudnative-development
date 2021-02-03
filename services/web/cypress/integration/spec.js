import posts from "../../src/routes/blog/_posts"

const slugs = posts.map((post) => post.slug)

describe("Blog posts", () => {
  beforeEach(() => {
    cy.visit("/blog")
  })
  it("has the correct <h1>", () => {
    cy.contains("h1", "Recent posts")
  })
  posts.forEach((post) => {
    it(`the about page has link to ${post.title}`, () => {
      cy.contains("[data-cy=blog-posts] li a", post.title).should(
        "have.attr",
        "href",
        `blog/${post.slug}`
      )
    })
  })
  it("can load the posts", () => {
    slugs.forEach((slug) => cy.visit(`/blog/${slug}`))
  })
})
