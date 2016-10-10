$(document).ready(function () {
  createIdea();
});

var createIdea = function() {
  $("#create_lesson").on("click", function(e) {
    var title = $("#title").val();
    var body = $("#body").val();
    $.ajax({
      method: "POST",
      url: "/api/v1/ideas",
      data: {idea: {title: title, body: body}},
      dataType: "json",
      success: function(idea) {
        appendIdea(idea);
        clearTextFiled();
      }
    });
  });
};
