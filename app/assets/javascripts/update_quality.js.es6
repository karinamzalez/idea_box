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
        removeIdea(idea);
      }
    });
  });
};
