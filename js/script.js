$(document).ready(function () {
  $("#drag").draggable();

  // Droppable

  $("#dragme").draggable();
  $("#drop").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("You made it!");
    },
  });

  // Sortable

  $("#sort").sortable();

  // accordion

  $("#accor").accordion({
    collapsible: true,
  });

  // Autocomplete

  var availableTags = ["HTML", "CSS", "JAVASCRIPT", "JQUERY"];
  $("#tags").autocomplete({
    source: availableTags,
  });

  // Date Picker

  $("#datepicker").datepicker();

  // Menu

  $("#menu").menu();

  // Slider

  $("#slider").slider();

  // Tooltip

  $(document).tooltip();

  // Select menu

  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "size") {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $("#effect").toggle(selectedEffect, options, 500);
  }

  // Set effect from select menu value
  $("#button").on("click", function () {
    runEffect();
  });

  $("#currency").on("change", function () {
    $("#spinner").spinner("option", "culture", $(this).val());
  });

  // Spinner

  $("#spinner").spinner({
    min: 5,
    max: 2500,
    step: 25,
    start: 1000,
    numberFormat: "C",
  });

  $("#selectable").selectable();

  function position() {
    $(".positionable").position({
      of: $("#parent"),
      my: $("#my_horizontal").val() + " " + $("#my_vertical").val(),
      at: $("#at_horizontal").val() + " " + $("#at_vertical").val(),
      collision:
        $("#collision_horizontal").val() + " " + $("#collision_vertical").val(),
    });
  }

  $(".positionable").css("opacity", 0.5);

  $("select, input").on("click keyup change", position);

  $("#parent").draggable({
    drag: position,
  });

  position();

  $("select").selectmenu({
    classes: {
      "ui-selectmenu-button": "ui-button-icon-only demo-splitbutton-select",
    },
    change: function () {
      $(".output").append("<li>" + this.value + "</li>");
    },
  });
  $(".controlgroup").controlgroup();
  $("button").click(function () {
    $(".output").append("<li>Running Last Action...</li>");
  });

  // ====================

  var state = true;
  $("#button").on("click", function () {
    if (state) {
      $("#effect").animate(
        {
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500,
        },
        1000
      );
    } else {
      $("#effect").animate(
        {
          backgroundColor: "#fff",
          color: "#000",
          width: 240,
        },
        1000
      );
    }
    state = !state;
  });
});
