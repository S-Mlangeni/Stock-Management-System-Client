/// <reference path="../typings/globals/jquery/index.d.ts" />

$.post("https://stock-management-system-server.herokuapp.com/get.php"/*"http://localhost/Stock_Management_System/System_Backend/get.php"*/, {
        "selectedSortValue": $("#clinicSorting").val()
    }, function(returnedData, ourpoststatus) {
        $(".fas").css({
            "display": "none"
        });
        $("#clinics").html(returnedData);
        console.log(ourpoststatus);
        buttonSelector();
    }
);

$("#clinicSorting").change(function() {
    if ($("#clinicSorting").val() == "allClinics") {
        $.post("https://stock-management-system-server.herokuapp.com/get.php"/*"http://localhost/Stock_Management_System/System_Backend/get.php"*/, {
            "selectedSortValue": "allClinics"
        }, function(returnedData, ourpoststatus) {
            $(".fas").css({
                "display": "none"
            });
            $("#clinics").html(returnedData);
            console.log(ourpoststatus);
            buttonSelector();
        });
    };
    if ($("#clinicSorting").val() == "lowMedClinics") {
        $.post("https://stock-management-system-server.herokuapp.com/get.php"/*"http://localhost/Stock_Management_System/System_Backend/get.php"*/, {
            "selectedSortValue": "lowMedClinics"
        }, function(returnedData, ourpoststatus) {
            $(".fas").css({
                "display": "none"
            });
            $("#clinics").html(returnedData);
            console.log(ourpoststatus);
            buttonSelector();
        });
    }; 
});

function buttonSelector() {
    $("button[id='NevAdd']").click(function() {
        $(this).html("<i class='fas fa-spinner fa-spin fas-off'></i>");
        const clinicNumber = $(this).prop("name");
        $.post("https://stock-management-system-server.herokuapp.com/post.php"/*"http://localhost/Stock_Management_System/System_Backend/post.php"*/, {
            "medicationType": "NEVIRAPINE",
            "clinicNumber": clinicNumber,
            "selectedSortValue": $("#clinicSorting").val()
        }, function(returnedData, ourpoststatus) {
            $("#clinics").html(returnedData);
            console.log(ourpoststatus);
            buttonSelector();
        });
    });
    $("button[id='NevRemove']").click(function() {
        $(this).html("<i class='fas fa-spinner fa-spin fas-off'></i>");
        const clinicNumber = $(this).prop("name");
        $.post("https://stock-management-system-server.herokuapp.com/delete.php"/*"http://localhost/Stock_Management_System/System_Backend/delete.php"*/, {
            "medicationType": "NEVIRAPINE",
            "clinicNumber": clinicNumber,
            "selectedSortValue": $("#clinicSorting").val()
        }, function(returnedData, ourpoststatus) {
            $("#clinics").html(returnedData);
            console.log(ourpoststatus);
            buttonSelector();
        });
    });
    $("button[id='StavAdd']").click(function() {
        $(this).html("<i class='fas fa-spinner fa-spin fas-off'></i>");
        const clinicNumber = $(this).prop("name");
        $.post("https://stock-management-system-server.herokuapp.com/post.php"/*"http://localhost/Stock_Management_System/System_Backend/post.php"*/, {
            "medicationType": "STAVUDINE",
            "clinicNumber": clinicNumber,
            "selectedSortValue": $("#clinicSorting").val()
        }, function(returnedData, ourpoststatus) {
            $("#clinics").html(returnedData);
            console.log(ourpoststatus);
            buttonSelector();
        });
    });
    $("button[id='StavRemove']").click(function() {
        $(this).html("<i class='fas fa-spinner fa-spin fas-off'></i>");
        const clinicNumber = $(this).prop("name");
        $.post("https://stock-management-system-server.herokuapp.com/delete.php"/*"http://localhost/Stock_Management_System/System_Backend/delete.php"*/, {
            "medicationType": "STAVUDINE",
            "clinicNumber": clinicNumber,
            "selectedSortValue": $("#clinicSorting").val()
        }, function(returnedData, ourpoststatus) {
            $("#clinics").html(returnedData);
            console.log(ourpoststatus);
            buttonSelector();
        });
    });
    $("button[id='ZidAdd']").click(function() {
        $(this).html("<i class='fas fa-spinner fa-spin fas-off'></i>");
        const clinicNumber = $(this).prop("name");
        $.post("https://stock-management-system-server.herokuapp.com/post.php"/*"http://localhost/Stock_Management_System/System_Backend/post.php"*/, {
            "medicationType": "ZIDOTABINE",
            "clinicNumber": clinicNumber,
            "selectedSortValue": $("#clinicSorting").val()
        }, function(returnedData, ourpoststatus) {
            $("#clinics").html(returnedData);
            console.log(ourpoststatus);
            buttonSelector();
        });
    });
    $("button[id='ZidRemove']").click(function() {
        $(this).html("<i class='fas fa-spinner fa-spin fas-off'></i>");
        const clinicNumber = $(this).prop("name");
        $.post("https://stock-management-system-server.herokuapp.com/delete.php"/*"http://localhost/Stock_Management_System/System_Backend/delete.php"*/, {
            "medicationType": "ZIDOTABINE",
            "clinicNumber": clinicNumber,
            "selectedSortValue": $("#clinicSorting").val()
        }, function(returnedData, ourpoststatus) {
            $("#clinics").html(returnedData);
            console.log(ourpoststatus);
            buttonSelector();
        });
    });
}