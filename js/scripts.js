
function Pizza( size, toppings )
{
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.cost = function( )
{
    var cost = 0;
    switch( this.size )
    {
        case "small":
        cost = 7.99;
        break;
        case "medium":
        cost = 9.99;
        break;
        case "large":
        cost = 14.99;
        break;
        case "extra-large":
        cost = 19.99;
        break;
    }
    
    for ( var i = 0; i < this.toppings.length; i++ )
    {
        cost += 0.45;
    }
    return cost.toFixed(2);
}

Pizza.prototype.equal = function( other )
{
    var matching = false;
    if( this.cost( ) === other.cost( ) && this.size === other.size && other.toppings.length === this.toppings.length )
    {
        matching = true; 
        for( var i = 0; i < this.toppings.length; i++ )
        {
            if( other.toppings[ i ] !== this.toppings[ i ] )
            {
                matching = false;
            }
        }
    }
    return matching;
}

String.prototype.capitalize = function( )
{
    return this.charAt(0).toUpperCase( ) + this.slice(1);
}

$(document).ready( function( ) 
{
    var order = [];
    $("#add-to-cart").on("click", function( )
    {
        var pizza = new Pizza( getSize( ), getToppings( ) );
        var cost = pizza.cost( );
        order.push( [ pizza, cost ] );
        
        updateOrderList( );
    });
    
    $(".pizza-size").on("click", function( ) 
    {
        var id = this.id;
        $(".pizza-size").each( function( )
        {
           if( this.id != id )
           {
              $("#" + this.id).prop("checked", false );
           }
        });
    });
    
    function updateOrderList( )
    {
        $("#order-list").empty( )
        for( var i = 0; i < order.length; i++ )
        {
            $("#order-list").append("<li class='order-from-list'> <h3> " + order[ i ][ 0 ].size.capitalize( ) + "</h3></li>" );
        }
        
        var orderCount = 0;
        $(".order-from-list").each( function( )
        {
                
            console.log( order[ orderCount ] );
            orderCount += 1;
        });
    }
    
    function getToppings( )
    {
        var toppings = [];
        $(".topping").each( function( )
        {
            if( $("#" + this.id).is(":checked") )
            {
                toppings.push( this.id );
            }
        });
        return toppings;
    }
    
    function getSize( )
    {
        var size;
        $(".pizza-size").each( function( )
        {
           if( $("#" + this.id ).is(":checked") )
           {
               size = this.id;
           }
        });
        return size;
    }
});