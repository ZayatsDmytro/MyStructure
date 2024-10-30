describe('E2E', () => {
    it('Open main window', () => {
      cy.visit('http://localhost:3000'); 
      cy.contains('Welcome'); 
    });
  });
  