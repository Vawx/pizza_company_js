
describe( 'Pizza', function() {
   it("Create a pizaa", function() {
      var pizza = new Pizza( "medium", ["pepperoni", "mushroom", "sausage"] );
      expect( pizza.size ).to.equal( "medium" ); 
      expect( pizza.toppings.length ).to.equal( 3 ); 
   });
   it("calculates cost of pizza", function( ) {
       var pizza = new Pizza( "large", ["pepperoni", "mushroom", "sausage"] );
       expect( pizza.cost( ) ).to.equal( '16.34' ); 
   });
   it("checks if two pizzas match", function( ) {
        var pizzaOne = new Pizza( "large", ["pepperoni", "mushroom", "sausage"] );
        var pizzaTwo = new Pizza( "large", ["pepperoni", "mushroom", "sausage"] );              
        expect( pizzaOne.equal( pizzaTwo ) ).to.equal( true );
    });
});
