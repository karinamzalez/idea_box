/*jshint esversion: 6 */
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
        clearTextFileds();
        removeIdea();
      }
    });
  });
};

function appendIdea(idea) {
  $(".ideas").prepend(`<tr><td>${idea.title}</td><td>${idea.body}</td><td>${idea.quality}</td><td><button class="remove" id="idea_<%= idea.id %>">● <p style="display:none">remove</p></button></td></tr>`);
}

function clearTextFileds() {
  $('#title').val('');
  $('#body').val('');
}
