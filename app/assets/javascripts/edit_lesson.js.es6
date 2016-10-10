/*jshint esversion: 6 */
$(document).ready(function () {
  editTitle();
  // editBody();
});

var editTitle = function() {
  $(".edit").on("ondblclick", function(e) {
    var button = e.target;
    var selectorId = button.getAttribute('id');
    var title = editTable();
    var id = button.getAttribute("data-id");
    editTitle();
    $.ajax({
      method: "PATCH",
      url: "/api/v1/ideas/edit-title/" + id,
      data: {title: title},
      dataType: "json",
      success: function(idea) {
        console.log(idea);
      }
    });
  });
};

function editTable() {
  $('.edit').prop('contentEditable', true);
  var contenteditable = document.querySelector('[contenteditable]');
    document.querySelector('[contenteditable]').addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        return contenteditable.textContent;
      }
  });
}


// var textBox = function(){
//   $('td').on('click', function(e) {
//
//     button = e.target;
//     var $this = $(this);
//     var $input = $('<input>', {
//         value: $this.text(),
//         type: 'text'
//
//     }).appendTo( $this.empty() ).focus();
//   });
// };
