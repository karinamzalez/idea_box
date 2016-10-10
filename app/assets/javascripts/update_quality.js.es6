/*jshint esversion: 6 */
$(document).ready(function () {
  upvoteQuality();
  downvoteQuality();
});

var upvoteQuality = function() {
  $(".quality-up").on("click", function(e) {
    var button = e.target;
    var id = button.getAttribute('data-id');
    $.ajax({
      method: "PATCH",
      url: "/api/v1/ideas/quality-up/" + id,
      dataType: "json",
      success: function(idea) {
        updateQuality(idea);
        upvoteQuality();
        downvoteQuality();
      }
    });
  });
};

var downvoteQuality = function() {
  $(".quality-down").on("click", function(e) {
    var button = e.target;
    var id = button.getAttribute('data-id');
    $.ajax({
      method: "PATCH",
      url: "/api/v1/ideas/quality-down/" + id,
      dataType: "json",
      success: function(idea) {
        updateQuality(idea);
        upvoteQuality();
        downvoteQuality();
      }
    });
  });
};

function updateQuality(idea){
  $(`#idea_${idea.id}`).empty();
  var row = $(`#idea_${idea.id}`)[0];
   $(`<td class="edit-title" id="edit-title-${idea.id}">${idea.title}</td><td class="edit-bod" id="edit-body-${idea.id} data-id="${idea.id}">${idea.body}</td><td class="quality"><button class="quality-down qual" data-id="${idea.id}">◀︎</button>${idea.quality}<button class="quality-up qual" data-id="${idea.id}">▶︎</button></td><td><button class="remove" id="idea_${idea.id}">● <p style="display:none">remove</p></button></td>`).appendTo(row);
}
