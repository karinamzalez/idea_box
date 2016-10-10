/*jshint esversion: 6 */
$(document).ready(function () {
  upvoteQuality();
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
      }
    });
  });
};

function updateQuality(idea){
  $(`#idea_${idea.id}`).empty();
  var row = $(`#idea_${idea.id}`)[0];
   $(`<td>${idea.title}</td><td>${idea.body}</td><td class="quality"><button class="quality-down qual" data-id="${idea.id}">◀︎</button>${idea.quality}<button class="quality-up qual" data-id="${idea.id}">▶︎</button></td><td><button class="remove" id="idea_${idea.id}">● <p style="display:none">remove</p></button></td>`).appendTo(row);
}
