import FilmFixture from '../../src/api/fixtures/FilmFixtures'

describe('Lights Camera Action App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('opens frontpage', () => {
        cy.contains(/Lights camera action!/i)
    })

    it('has covers', () => {
        cy.get('[data-cy=cover]')
    })

    it('searchs Shang Chi movie', () => {
        cy.get('[placeholder="Search..."]').type('shang chi')
        cy.get('[data-cy=cover]').should('contain', FilmFixture.film().title)
    })

    it('shows "404 not found" when api returns an error', () => {
        cy.get('[placeholder="Search..."]').type(' ')
        cy.contains(/404 not found/i)
    })

    it('shows "no movies found" when no search were found', () => {
        cy.get('[placeholder="Search..."]').type('*')
        cy.contains(/no/i)
        cy.contains(/movies/i)
        cy.contains(/found/i)
    })

    it('goes to film details', async () => {
        const titleElements = await cy.get('h3')
        const title = titleElements.first().text()
        cy.log(title)
        cy.get('[data-cy=cover]').first().as('firstCover')
        cy.get('@firstCover').click()
        cy.contains(title)
    })

    it('loads next page', () => {
        cy.get('button').last().click()
    })

})
