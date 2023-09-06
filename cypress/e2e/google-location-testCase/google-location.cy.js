/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://google.com')
  })

  it('.type() - google map location validation ', () => {
    
    cy.get('#APjFqb')
      .type('google map');
 
      cy.contains('google map').first().click();

      cy.contains('Maps').click();

      cy.get('#searchboxinput').type('27.695006,84.431811{enter}');

      cy.wait(15000);

      cy.contains('क्षेत्रपुर, भरतपुर 44200');

     
  


    })
  
    
    

});