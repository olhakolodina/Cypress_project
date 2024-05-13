/// <reference types="Cypress" />;
import { mobileReplenishment } from "../../support/pages/mobileReplenishment";
import { transfers } from "../../support/pages/transfers";
import { basePage } from "../../support/pages/basePage";

beforeEach('setup success responce with stub', ()=> {
    cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?lang=en',
        {fixture: 'confirmResponse/success.json'})
})

it.only("Replenishment of Ukraine mobile phone number", () => {
  basePage.open("https://next.privat24.ua/mobile?lang=en");

  mobileReplenishment.typePhoneNumber("993951069");
  basePage.typeAmount("2");
  basePage.typeDebitCardData("4552331448138217", "0524", "111");
  basePage.submitPayment();
  cy.wait(1000);
  mobileReplenishment.checkDebitCard("4552 **** **** 8217");
  // mobileReplenishment.checkDebitAmount('2 UAH');
  mobileReplenishment.checkDebitComission("2");
  mobileReplenishment.checkDebitCurrency("UAH");
  cy.contains('Pay')
  .click();
});

it("Money transfer between foreign cards", () => {
  basePage.open("https://next.privat24.ua/money-transfer/card?lang=en");

  basePage.typeDebitCardData("4552331448138217", "0524", "111");
  transfers.typeNameandSurname("Shayne", "McConnell");
  transfers.typeReceiverCard("4567739561253907");
  transfers.typeReceiverNameandSurname("Ruth", "Montalvo");
  basePage.typeAmount("300");
  transfers.typeComment("Cypress test");
  basePage.submitPayment();
});

// Example HTTP GET request
it("Example sending the GET request", () => {
  cy.request("https://next.privat24.ua/").then((response) => {
    console.log(response);
  });
});

// Example HTTP POST request with expect verification
it("Example sending the POST request", () => {
  const requestBody = {
    amount: 12,
    phone: "+380993951069",
    cardCvv: "111",
    cardExp: "0526",
    card: "4552331448138217",
    action: "info",
    xref: "c734bd21cdac8020f54e7a12f3710a5a",
    _: 1715259125338,
  };

  const headerData = {
    Cookie:
      "_gcl_au=1.1.1017757326.1714408612; _fbp=fb.1.1714408613193.831558769; lsl=1; _gid=GA1.2.846576824.1715237678; pubkey=6c01027a51fbb1a314c14637afda5a55; _ga=GA1.2.2059635210.1714408613; lfp=4/29/2024, 7:36:58 PM; pa=1714465823479.20580.4273826706041488next.privat24.ua0.10050120967854204+20; MgidSensorNVis=40; MgidSensorHref=https://next.privat24.ua/mobile; fp=51; _ga_G0T18XQY2T=GS1.1.1715257353.26.1.1715259105.60.0.0; _ga_7ZKV2DE89M=GS1.1.1715257353.26.1.1715259105.60.0.0; _ga_C7N2L9YCQ9=GS1.1.1715257353.26.1.1715259115.60.0.0",
  };

  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: requestBody,
    headers: headerData,
  }).then((response) => {
    expect(response).to.have.property('status').to.equal(200)
    expect(response.body).to.have.property('status').to.equal('success')
    expect(response.body.data).to.have.property('amount').to.equal('12.0')
    // expect(response.body.data[0]).to.have.property('amount').to.equal('12.0')
    console.log(response);
  });
});

// Example HTTP POST request with should verification
it("Example sending the POST request", () => {
    const requestBody = {
      amount: 12,
      phone: "+380993951069",
      cardCvv: "111",
      cardExp: "0526",
      card: "4552331448138217",
      action: "info",
      xref: "c734bd21cdac8020f54e7a12f3710a5a",
      _: 1715259125338,
    };
  
    const headerData = {
      Cookie:
        "_gcl_au=1.1.1017757326.1714408612; _fbp=fb.1.1714408613193.831558769; lsl=1; _gid=GA1.2.846576824.1715237678; pubkey=6c01027a51fbb1a314c14637afda5a55; _ga=GA1.2.2059635210.1714408613; lfp=4/29/2024, 7:36:58 PM; pa=1714465823479.20580.4273826706041488next.privat24.ua0.10050120967854204+20; MgidSensorNVis=40; MgidSensorHref=https://next.privat24.ua/mobile; fp=51; _ga_G0T18XQY2T=GS1.1.1715257353.26.1.1715259105.60.0.0; _ga_7ZKV2DE89M=GS1.1.1715257353.26.1.1715259105.60.0.0; _ga_C7N2L9YCQ9=GS1.1.1715257353.26.1.1715259115.60.0.0",
    };
  
    cy.request({
      method: "POST",
      url: "https://next.privat24.ua/api/p24/pub/mobipay",
      body: requestBody,
      headers: headerData,
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })
  });
