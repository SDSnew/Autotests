import * as data from "../helpers/pokemons_data.json"

describe('Покупка аватара', function () {


    it('Покупка автара', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('.style_1_popup_white_title', { timeout: 10000 }).should('be.visible') // видим шапку формы для регистрации
        cy.get('.style_1_popup_white_title').contains('Битва покемонов');
        cy.get('#k_email').should('be.visible').type(data.login);
        cy.get('#k_password').should('be.visible').type(data.password);
        cy.get('.MuiButton-root').click();
        cy.get('.style_1_heading_38_400_pokemon_classic').should('be.visible') //добавил чтобы надпись "Покемоны" на  главной странице была видна
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"]', { timeout: 10000 }).should('be.visible') // Добавил, чтобы кнопка "Смена аватара" была видна
        cy.get('[data-qa="shop"]').contains('Смена аватара')// Добавил, чтобы надпись "Смена аватара" прогрузилась
        cy.get('[data-qa="shop"]').click();
        cy.get('.available > button').first().click();
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input', { timeout: 15000 }).type("4646363458699307");
        cy.get(':nth-child(1) > .style_1_base_input').should('be.visible', { timeout: 15000 }).type('0632');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input', { timeout: 15000 }).type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input', { timeout: 15000 }).type('Danil SHipov');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment', { timeout: 20000 }).should('be.visible').and('not.be.disabled').and('contain', 'Оплатить').click();
        cy.get('.payment_form_3ds_title').should('be.visible')
        cy.get('.payment_form_3ds_title').contains('Подтверждение покупки')
        cy.get('.style_1_base_input').should('be.visible').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').should('be.visible').and('not.be.disabled').click();
        cy.get('.success__image').should('be.visible');
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно');




    })
})