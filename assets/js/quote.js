/* residentialsection */
var index = 1;
$("#building-type").change(function () {

    if ($(this).val() == "residential") {
        $('#residentialoption').show();
        CalculateResidential();


    } else {
        $('#residentialoption').hide();

    }
});
$("#building-type").trigger("change");

/* corporatesection */

$("#building-type").change(function () {

    if ($(this).val() == "corporate") {
        $('#corporateoption').show();
        CalculateCorporate()

    } else {
        $('#corporateoption').hide();
        $("#number-of-corporations").val('');
        $("#number-of-floors-cor").val('');
        $("#number-of-basements-cor").val('');
        $("#number-of-parking-spots-cor").val('');
        $("#maximum-occupancy-cor").val('');


    }
});
$("#building-type").trigger("change");

/* commercialsection */

$("#building-type").change(function () {

    if ($(this).val() == "commercial") {
        $('#commercialoption').show();
        CalculateCommercial();


    } else {
        $('#commercialoption').hide();

    }
});
$("#building-type").trigger("change");

/* hybridesection */

$("#building-type").change(function () {

    if ($(this).val() == "hybride") {
        $('#hybrideoption').show();
        CalculateHybrid()

    } else {
        $('#hybrideoption').hide();
        $("#number-of-companies-hy").val('');
        $("#number-of-floors-hy").val('');
        $("#number-of-basements-hy").val('');
        $("#number-of-parking-spots-hy").val('');
        $("#maximum-occupancy-hy").val('');
        $("#business-hours-hy").val('');
    }
});
$("#building-type").trigger("change");



function CalculateResidential() {

    var averageAppartmentsFloor = 0;

    var nbAppartments = 0;

    var nbFloors = 0;

    var nbElevator = 0;

    var nbElevatorCol = 0;

    $("#residentialoption").change(function () {

        nbAppartments = parseInt($("#number-of-apartments").val());

        nbFloors = parseInt($("#number-of-floors").val());

        averageAppartmentsFloor = Math.ceil(nbAppartments / nbFloors);

        nbElevator = Math.ceil(averageAppartmentsFloor / 6);

        nbElevatorCol = Math.ceil(nbFloors / 20)

        nbElevatorCol *= nbElevator;

        $("#numberelevator").val(nbElevatorCol);

    });

}

function CalculateCommercial() {

    var nbElevator = 0;

    $("#number-of-elevators").change(function () {

        nbElevator = $("#number-of-elevators").val();

        $("#numberelevator").val(nbElevator);

    });

}

function CalculateCorporate() {

    var nbOccupant = 0;

    var nbFloors = 0;

    var nbBasements = 0;

    var nbOccupantFloor = 0;

    var total = 0;

    var nbColumn = 0;

    var nbAverageElevatorColumn = 0;

    var nbElevator = 0;

    var nbtotalElevators = 0;

    $("#maximum-occupancy-cor, #number-of-floors-cor, #number-of-basements-cor").change(function () {

        nbOccupant = parseInt($("#maximum-occupancy-cor").val());

        nbFloors = parseInt($("#number-of-floors-cor").val());

        nbBasements = parseInt($("#number-of-basements-cor").val());

        total = (nbFloors + nbBasements);

        nbOccupantFloor = nbOccupant * total;

        nbElevator = Math.ceil(nbOccupantFloor / 1000);

        nbColumn = Math.ceil(total / 20);

        nbAverageElevatorColumn = Math.ceil(nbElevator / nbColumn);

        nbtotalElevators = nbAverageElevatorColumn * nbColumn;

        $("#numberelevator").val(nbtotalElevators);
    });

}

function CalculateHybrid() {

    var nbOccupant = 0;

    var nbFloors = 0;

    var nbBasements = 0;

    var nbOccupantFloor = 0;

    var total = 0;

    var nbColumn = 0;

    var nbAverageElevatorColumn = 0;

    var nbElevator = 0;

    var nbtotalElevators = 0;

    $("#maximum-occupancy-hy, #number-of-floors-hy, #number-of-basements-hy").change(function () {

        nbOccupant = parseInt($("#maximum-occupancy-hy").val());

        nbFloors = parseInt($("#number-of-floors-hy").val());

        nbBasements = parseInt($("#number-of-basements-hy").val());

        total = (nbFloors + nbBasements);

        nbOccupantFloor = nbOccupant * total;

        nbElevator = Math.ceil(nbOccupantFloor / 1000);

        nbColumn = Math.ceil(total / 20);

        nbAverageElevatorColumn = Math.ceil(nbElevator / nbColumn);

        nbtotalElevators = nbAverageElevatorColumn * nbColumn;

        $("#numberelevator").val(nbtotalElevators);
    });

}