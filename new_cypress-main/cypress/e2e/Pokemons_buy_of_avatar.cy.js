import * as data from "../helpers/pokemons_data.json"

describe('Покупка аватара', function () {


    it('Покупка автара', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('.style_1_popup_white_title', { timeout: 10000 }).should('be.visible');
        cy.get('.style_1_popup_white_title').contains('Битва покемонов');
        cy.get('#k_email').should('be.visible').type(data.login);
        cy.get('#k_password').should('be.visible').type(data.password);
        cy.get('.MuiButton-root').click();
        cy.get('.style_1_heading_38_400_pokemon_classic').should('be.visible');
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"]', { timeout: 10000 }).should('be.visible');
        cy.get('[data-qa="shop"]').contains('Смена аватара');
        cy.get('[data-qa="shop"]').click();
        cy.get('.available > button').first().click();
        cy.get('.payment_form_card_form', { timeout: 15000 }).should('be.visible');
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input', { timeout: 15000 }).type("4111111111111111");
        cy.get(':nth-child(1) > .style_1_base_input').should('be.visible', { timeout: 15000 }).type('1234');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input', { timeout: 15000 }).type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input', { timeout: 15000 }).type('Danil SHipov');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment', { timeout: 15000 }).should('not.have.class', 'disable').click();
        cy.get('.threeds_number').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment', { timeout: 15000 }).should('not.have.class', 'disable').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
    });
});



