define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["header.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a href=\"#\" class=\"name\">\r\n  <img alt=\"1\" class=\"avatar\" src=\"img/logo.png\" width=\"150\">\r\n  <div class=\"pull-right\">\r\n    <button class=\"btn btn-secondary logout\">Logout</button>\r\n  </div>\r\n</a>";
  });

this["JST"]["confirm.modal.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n      <span class=\"sr-only\">Close</span>\r\n    </button>\r\n    <h4 class=\"modal-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>";
  if (stack1 = helpers.question) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.question); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"js-cancel btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n    <button type=\"button\" class=\"js-confirm btn btn-main\" data-dismiss=\"modal\">Confirm</button>\r\n  </div>\r\n</div><!-- /.modal-content -->";
  return buffer;
  });

this["JST"]["info.modal.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n      <span class=\"sr-only\">Close</span>\r\n    </button>\r\n    <h4 class=\"modal-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.message); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"js-ok btn btn-main\" data-dismiss=\"modal\">Ok</button>\r\n  </div>\r\n</div><!-- /.modal-content -->";
  return buffer;
  });

this["JST"]["add.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"page-header\">\r\n  <h3 class=\"title\">What do you have to do this week? </h3>\r\n</div>\r\n\r\n<div class=\"panel panel-default clear-fix\">\r\n  <form role=\"form-inline\">\r\n\r\n    <div class=\"form-group col-sm-4\">\r\n      <label>Task Name</label>\r\n      <input type=\"text\"\r\n        class=\"form-control js-name\"\r\n        name=\"task-name\"\r\n        placeholder=\"Enter the task name\"\r\n        required=\"true\">\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-4\">\r\n      <label>Description</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control js-desc\"\r\n        id=\"dueDate\"\r\n        name=\"desc\"\r\n        placeholder=\"Enter the description\"\r\n        required=\"true\">\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-4\">\r\n      <label>Due Date</label>\r\n      <input type=\"date\"\r\n        class=\"form-control js-dueDate col-sm-10\"\r\n        id=\"inputDueDate\"\r\n        name=\"dueDate\"\r\n        placeholder=\"Enter the due date\"\r\n        required=\"true\">\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-12 add-botton\">\r\n      <div class=\"form-group pull-right\">\r\n        <button type=\"submit\" class=\"js-addTask btn btn-main\">Add Task</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n";
  });

this["JST"]["task.layout.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"filtersRegion\" class=\"filters full-height\">\r\n  <!-- FILTER SECTION -->\r\n</div>\r\n<div class=\"page-header\">\r\n  <h3 class=\"title\">To Do<small></small></h3>\r\n</div>\r\n<div id=\"resultsRegion\" class=\"results full-height\">\r\n  <!-- RESULTS SECTION -->\r\n</div>\r\n<div id=\"paginationRegion\" class=\"pagination\">\r\n  <!-- PAGINATION SECTION -->\r\n</div>\r\n";
  });

this["JST"]["noresults.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\r\n<span class=\"glyphicon glyphicon-info-sign\"></span>\r\n<span>No Tasks were found...</span>";
  });

this["JST"]["task.item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "\r\n      <button class=\"js-finishTask tooltiped btn btn-default\"\r\n              data-toggle=\"tooltip\"\r\n              data-placement=\"top\"\r\n              title=\"Finish\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </button>\r\n    ";
  }

  buffer += "<div class=\"date pull-right\">\r\n  <span class=\"light\">Due Date:</span> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseDate || (depth0 && depth0.parseDate)),stack1 ? stack1.call(depth0, (depth0 && depth0.dueDate), options) : helperMissing.call(depth0, "parseDate", (depth0 && depth0.dueDate), options)))
    + "\r\n</div>\r\n\r\n<h3>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h3>\r\n<span class=\"label ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.toLowerCase || (depth0 && depth0.toLowerCase)),stack1 ? stack1.call(depth0, (depth0 && depth0.status), options) : helperMissing.call(depth0, "toLowerCase", (depth0 && depth0.status), options)))
    + "\">";
  if (stack2 = helpers.status) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.status); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\r\n<p>\r\n  ";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.description); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\r\n</p>\r\n<div class=\"date\">\r\n  <span class=\"light\">Creation Date:</span> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseDate || (depth0 && depth0.parseDate)),stack1 ? stack1.call(depth0, (depth0 && depth0.creationDate), options) : helperMissing.call(depth0, "parseDate", (depth0 && depth0.creationDate), options)))
    + "\r\n</div>\r\n\r\n\r\n<div class=\"actions\">\r\n  <div class=\"btn-group\">\r\n    <button class=\"js-removeTask tooltiped btn btn-default\"\r\n            data-toggle=\"tooltip\"\r\n            data-placement=\"top\"\r\n            title=\"Remove\">\r\n      <span class=\"glyphicon glyphicon-remove\"></span>\r\n    </button>\r\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifCond || (depth0 && depth0.ifCond)),stack1 ? stack1.call(depth0, (depth0 && depth0.status), "ToDo", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.status), "ToDo", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n  </div>\r\n</div>";
  return buffer;
  });

this["JST"]["task.list.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel panel-default clear-fix\">\r\n  <div class=\"form-inline\" role=\"form\">\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"searchWord\"\r\n          name=\"searchWord\"\r\n          placeholder=\"Search...\">\r\n      </div>\r\n      <label for=\"inputEmail3\" class=\"col-sm-8 control-label\">\r\n        Start writing to filter the list by Task Name\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>";
  });

return this["JST"];

});