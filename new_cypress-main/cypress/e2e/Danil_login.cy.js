import * as data from "../helpers/danil_data.json"

describe('Проверка авторизации', function () {

   beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get("#forgotEmailButton").should('have.css', 'color', 'rgb(0, 85, 152)');
           });   
    afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        });

   it('Верный пароль и верный логин', function () {
        cy.get('#mail').type(data.login);
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    
    })

    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type(data.login);
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    
    
    })

    it('Ввод правильного логина, но не верного пароля', function () {
        cy.get('#mail').type(data.login);
        cy.get('#pass').type(data.password+"7");
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        
    
    })

    it('Ввод не правильного логина, но верного пароля', function () {
        cy.get('#mail').type("SDS@mail.ru");
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    ;
    
    })

     it('Ввод логина без @', function () {
        cy.get('#mail').type("germandolnikov.ru");
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
    })

    it('Проверка на приведение к строчным буквам', function () {
        cy.get('#mail').type("GerMan@Dolnikov.ru");
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })

})


// npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
