export class Transfers {
    typeNameandSurname(name, surname) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)

            .get('[data-qa-node="lastNamedebitSource"]')
            .type(surname)
    }

    typeReceiverCard(receiverCard) {
        cy.get('[data-qa-node="numberreceiver"]')
            .type(receiverCard)
    }

    typeReceiverNameandSurname(receiverName, receiverSurname) {
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(receiverName)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(receiverSurname)
    }

    typeComment(comment) {
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }
}

export const transfers = new Transfers()