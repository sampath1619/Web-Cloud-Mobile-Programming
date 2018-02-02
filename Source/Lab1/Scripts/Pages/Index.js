var educationType = "";
var semester = "";
var option = "";
$(function () {
    $("#education li a").click(function () {
        var edu = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(edu + ' <span class="caret"></span>');
        educationType = $(this).text();
    });

    $("#sem li a").click(function () {
        var sem = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(sem + ' <span class="caret"></span>');
        semester = $(this).text();
    });

    $("#career_option li a").click(function () {
        var op = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(op + ' <span class="caret"></span>');
        option = $(this).text();
    });

   
    $("#availableClasses").dataTable({
        responsive: true,
        "columnDefs": [
            { "orderable": false, "width": "200px", "targets": [9] }
        ],
        "columns": [
            { "data": "Instructor", className: "min-desktop" },
            { "data": "Course Description", className: "min-desktop" },
            { "data": "Prerequisites", className: "min-desktop" },
            { "data": "Credit hours", className: "min-desktop" },
            { "data": "Duration", className: "min-desktop" },
            { "data": "Rating", className: "min-desktop" },
            { "data": "Reviews", className: "min-desktop" },
            { "data": "Similar courses", className: "min-desktop" },
            { "data": "Image", className: "min-desktop" },
            { "data": "URL", className: "min-desktop" },
        ]
    });
    $('#availableClasses').parents('div.dataTables_wrapper').first().hide();

    $("#availableClasses").hide();
    courseAvailable();
});

function courseAvailable() {
    $("#Submit").click(function () {
        $("#error").text("");
        if (educationType == "Masters" && semester == "Spring" && option == "Computer Science") {
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").show();
            $("#choi").hide();
            $("#zheng").hide();
        } else if (educationType == "" || semester == "" || option == "") {
            $("#error").text("Please select all options");
        } else {
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").hide();
            $("#choi").show();
            $("#zheng").show();
        }


    });


}

