export class MobilePhoneReplenishment {
    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }
    
    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }
    
    // checkDebitAmount(debitAmount) {
    //     cy.get('.sum_qmnzi4wXU6 > [data-qa-node="amount"]')
    //         .should('have.text', debitAmount)
    // }

    checkDebitComission(debitComission) {
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should('have.text', debitComission)
    }

    checkDebitCurrency(debitCurrency) {
        cy.get('[data-qa-node="commission-currency"]')
            .should('contain.text', debitCurrency)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()