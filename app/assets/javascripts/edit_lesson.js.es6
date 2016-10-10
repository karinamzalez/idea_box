/*jshint esversion: 6 */
$(document).ready(function () {
  editTitleOnEnter();
  editTitleOnFocusOut();
  editBodyOnEnter();
  editBodyOnFocusOut();
});

var editTitleOnEnter = function() {
  $('td').prop('contentEditable', true);
  $(".edit-title").on("keypress", function(e) {
    if (e.which === 13) {
      var button = e.target;
      var selectorId = button.getAttribute('id');
      var title = newTitle();
      var id = button.getAttribute("data-id");
      $.ajax({
        method: "PATCH",
        url: "/api/v1/ideas/edit-title/" + id,
        data: {title: title},
        dataType: "json",
        success: function(idea) {
          console.log(idea);
        }
      });
    }
  });
};

var editTitleOnFocusOut = function() {
  $('td').prop('contentEditable', true);
  $(".edit-title").on("focusout", function(e) {
    var button = e.target;
    var selectorId = button.getAttribute('id');
    var title = newTitle();
    var id = button.getAttribute("data-id");
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

var editBodyOnEnter = function() {
  $('td').prop('contentEditable', true);
  $(".edit-bod").on("keypress", function(e) {
    if (e.which === 13) {
      var button = e.target;
      var selectorId = button.getAttribute('id');
      var body = newTitle();
      var id = button.getAttribute("data-id");
      $.ajax({
        method: "PATCH",
        url: "/api/v1/ideas/edit-body/" + id,
        data: {body: body},
        dataType: "json",
        success: function(idea) {
          console.log(idea);
        }
      });
    }
  });
};

var editBodyOnFocusOut = function() {
  $('td').prop('contentEditable', true);
  $(".edit-bod").on("focusout", function(e) {
    var button = e.target;
    var selectorId = button.getAttribute('id');
    var body = newTitle();
    var id = button.getAttribute("data-id");
    $.ajax({
      method: "PATCH",
      url: "/api/v1/ideas/edit-body/" + id,
      data: {body: body},
      dataType: "json",
      success: function(idea) {
        console.log(idea);
      }
    });
  });
};

function newTitle() {
  var contenteditable = document.querySelector('[contenteditable]');
  return contenteditable.textContent;
}
