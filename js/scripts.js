
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
        case "extraLarge":
        cost = 19.99;
        break;
    }
    
    for ( var i = 0; i < this.toppings.length; i++ )
    {
        cost += 0.45;
    }
    return cost;
}