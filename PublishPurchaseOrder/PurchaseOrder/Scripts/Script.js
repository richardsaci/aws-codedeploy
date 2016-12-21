function calExtCost()
{
    //alert("Yea! It Works");
     

    // Confirm QuantityOrdered text box has a number entered.



    // Confirm UnitCost text box has a number entered.




    var extendedcost = parseFloat($("#QuantityOrdered").val()).toFixed(2) * parseFloat($("#UnitCost").val()).toFixed(2);
    //alert(extendedcost);
    $("#ExtendedCost").val( parseFloat(extendedcost).toFixed(2));

}