/*jshint esversion: 6 */
$(document).ready(function () {
  deleteIdea();
});

var deleteIdea = function() {
  $(".remove").on("click", function(e) {
    button = e.target;
    var id = button.getAttribute("data-id");
    $.ajax({
      method: "DELETE",
      url: "/api/v1/ideas/" + id,
      data: {id: id},
      dataType: "json",
      success: function(idea) {
        removeIdea(idea);
      }
    });
  });
};
