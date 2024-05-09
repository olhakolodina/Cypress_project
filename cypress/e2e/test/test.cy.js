/// <reference types="Cypress" />;
import { mobileReplenishment } from "../../support/pages/mobileReplenishment";
import { transfers } from "../../support/pages/transfers";
import { basePage } from "../../support/pages/basePage";

it('Replenishment of Ukraine mobile phone number', ()=> {
    basePage.open('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber('993951069');
    basePage.typeAmount('2');
    basePage.typeDebitCardData('4552331448138217','0524','111' );
    basePage.submitPayment();
    cy.wait(1000);
    mobileReplenishment.checkDebitCard('4552 **** **** 8217');
    // mobileReplenishment.checkDebitAmount('2 UAH');
    mobileReplenishment.checkDebitComission('2');
    mobileReplenishment.checkDebitCurrency('UAH')
});

it('Money transfer between foreign cards', ()=> {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')

    basePage.typeDebitCardData('4552331448138217','0524','111');
    transfers.typeNameandSurname('Shayne', 'McConnell');
    transfers.typeReceiverCard('4567739561253907');
    transfers.typeReceiverNameandSurname('Ruth','Montalvo');
    basePage.typeAmount('300');
    transfers.typeComment('Cypress test');
    basePage.submitPayment()
    
})