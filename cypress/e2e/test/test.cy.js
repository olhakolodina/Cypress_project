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

it("Example sending the GET request", () => {
    cy.request("https://next.privat24.ua/").then((response) => {
      console.log(response);
    });
  });
  
  it("Example sending the POST request", () => {
    const requestBody = {
      amount: 12,
      phone: "+380993951069",
      cardCvv: "111",
      cardExp: "0526",
      card: "4552331448138217",
      action: "info",
      xref: "f085585aef0e67b38969b28de9253040",
      _: 1715253671337,
    };
  
    const headerData = {
      Cookie:
        "_gcl_au=1.1.1017757326.1714408612; _fbp=fb.1.1714408613193.831558769; lsl=1; _gid=GA1.2.846576824.1715237678; pubkey=ffc17fcc9dadb3531d0f1e6fbf42495d; _ga=GA1.2.2059635210.1714408613; lfp=4/29/2024, 7:36:58 PM; pa=1714465823479.20580.4273826706041488next.privat24.ua0.10050120967854204+19; MgidSensorNVis=38; MgidSensorHref=https://next.privat24.ua/mobile; fp=49; _ga_C7N2L9YCQ9=GS1.1.1715253314.25.1.1715253629.60.0.0; _ga_G0T18XQY2T=GS1.1.1715253314.25.1.1715253647.60.0.0; _ga_7ZKV2DE89M=GS1.1.1715253314.25.1.1715253647.60.0.0",
    };
  
    cy.request({
      method: "POST",
      url: "https://next.privat24.ua/api/p24/pub/mobipay",
      body: requestBody,
      headers: headerData,
    }).then((response) => {
      
  
      console.log(response.body);
    });
  });
  