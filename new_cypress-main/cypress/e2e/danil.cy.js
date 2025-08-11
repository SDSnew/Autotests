import * as data from "../helpers/pokemons_data.json"

describe('Покупка аватара', function () {


    it('Покупка автара', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type(data.login);
        cy.get('#k_password').type(data.password);
        cy.get('.MuiButton-root').click();
        cy.get('.style_1_heading_38_400_pokemon_classic').should('be.visible') //добавил чтобы надпись "Покемоны" на  главной странице была видна
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"]').should('be.visible') // Добавил, чтобы кнопка "Смена аватара" была видна
        cy.get('[data-qa="shop"]').contains('Смена аватара')// Добавил, чтобы надпись "Смена аватара" прогрузилась
        cy.get('[data-qa="shop"]').click();
        cy.get('.available > button').first().click();
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type("4646363458699307");
        cy.get(':nth-child(1) > .style_1_base_input').type('0632');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Danil SHipov');
        cy.get('#root > div > div > main > form > div > div.style_1_base_button_payment_body > button').click();
        cy.get('.style_1_base_input').type('56456');
        cy.get('#root > div > div > main > form > div > div.style_1_base_button_payment_body > button').click();
        cy.get('.success__image').should('be.visible');
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно');




    })
})