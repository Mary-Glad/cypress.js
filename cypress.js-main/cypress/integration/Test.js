describe('Тестирование сайта', function () {
    
    it('Проверка', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click().click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('[href="https://testqastudio.me"]').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.intercept('POST', '/product/**').as('ajax-product');
        cy.intercept('/?wc-ajax=get_refreshed_fragments').as('ajax-reload');
        cy.get('.product-button-wrapper > button[name="add-to-cart"]:visible').click();
        cy.wait('@ajax-product');
        cy.wait('@ajax-reload');
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Мария');
        cy.get('#billing_last_name').type('Гладкова');
        cy.get('#billing_address_1').type('улица Котиков, 1');
        cy.get('#billing_city').type('Ижевск');
        cy.get('#billing_state').type('Удмуртская республика');
        cy.get('#billing_postcode').type('426000');
        cy.get('#billing_phone').type('89112345690');
        cy.get('#billing_email').type('kotik@mail.ru');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.');
         })

})
