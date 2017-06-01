$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var genderInput = $("#gender").val();
    var hairColorInput = $("input:radio[name=hairColor]:checked").val();
    var dob = $("#born").val();
    var colorInput = $("#color").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".gender").text(genderInput);
    $(".hairColor").text(hairColorInput);
    $(".born").text(dob);
    $(".color").text(colorInput);

    $(".feedback").show();
    event.preventDefault();
  });
});
