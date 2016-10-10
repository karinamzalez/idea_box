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
        deleteIdea();
        upvoteQuality();
        downvoteQuality();
      }
    });
  });
};

function appendIdea(idea) {
  $(".ideas").prepend(`<tr id="idea_${idea.id}"><td class="edit-title" id="edit-title-${idea.id}">${idea.title}</td><td class="edit-bod" id="edit-body-${idea.id} data-id="${idea.id}">${idea.body}</td><td class="quality"><button class="quality-down qual" data-id="${idea.id}">◀︎</button>${idea.quality}<button class="quality-up qual" data-id="${idea.id}">▶︎</button></td><td><button class="remove" id="idea_${idea.id}">● <p style="display:none">remove</p></button></td></tr>`);
}

function clearTextFileds() {
  $('#title').val('');
  $('#body').val('');
}
