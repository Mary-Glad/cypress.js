describe('Тестирование формы авторизации', function () {
    
    it('Негативный кейс-2', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('del-marija-gladkova@qa.studio');
        cy.get('#pass').type('iLoveqa1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
         })

})
