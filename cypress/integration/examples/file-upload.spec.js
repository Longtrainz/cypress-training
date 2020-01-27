/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
        // Visit the Demo website
      cy.visit('https://fineuploader.com/demos.html')
    })

    it('File upload demo', () => {
        cy.fixture('EAWeekly.png', 'base64').then(fileContent => {
            cy.get('#fine-uploader-s3 > .qq-uploader-selector > .qq-upload-button-selector > input').upload({
                fileContent,
                fileName: 'EAWeekly.png',
                mimeType: 'image/png'
            },
            {
                uploadType: 'input'
            }
            )
        
        });
    });
});
