import * as data from "../helpers/pokemons_data.json"

describe('Покупка аватара', function () {


   it('Покупка автара', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type(data.login);
        cy.get('#k_password').type(data.password);
        cy.get('.MuiButton-root').click();
        cy.wait(2000);
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"]').click();
        cy.wait(2000);
        cy.get('.available > button').first().click();
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type("4646363458699307");
        cy.get(':nth-child(1) > .style_1_base_input').type('0632');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Curtis Zotova');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.style_1_base_input').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.success__image').should('be.visible');
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно');




    })
})