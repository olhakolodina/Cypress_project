/// <reference types="Cypress" />;


it('type', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="phone-number"]')
    .type(112233344)
})

it('focus', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .focus()
})

it('blur', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .focus()
    .blur()
})

it('clear', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .type(999)
    .wait(2000)
    .clear()
})

it('submit', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('form[method="post"]')
    .submit()
})

it('click', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="debitSourceSource"]')
    .click()
})

it('rightClick', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    .contains('Right click to edit')
    .rightclick()
})

it('doubleClick', ()=>{
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event')
    .contains('My Card')
    .dblclick()
})

it('check', ()=>{
    cy.visit('https://next.privat24.ua/deposit/open/calculator')
    .get('[data-qa-node="afterTaxPay"]')
    .uncheck({force: true})
})

it('uncheck', ()=>{
    cy.visit('https://en.privatbank.ua/')
    .get('#switch-input')
    .check({force: true})
    .wait(2000)
    .uncheck({force: true})
})

// it.only('select', () => {
//     cy.visit('https://next.privat24.ua/')
//     cy.get('[data-qa-node="currencyA"]')
//     .select('EUR')
// })

it('scrollIntoView', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="lang"]')
    .wait(2000)
    .scrollIntoView()
})

it('scrollTo', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .wait(2000)
    cy.scrollTo(0, 500)
})

it('trigger', ()=>{
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.contains('Services')
    .trigger('mouseover')
})

it.only('select', () => {

    cy.origin('https://www.facebook.com/reg/', ()=> {
        cy.get('firstname')
    })

})