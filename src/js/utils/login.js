var LoginView = (function($) {
  'use strict';

  var host, vhost;

  var init = function() {
    var token = $.cookie('token');

    if (token) {
      location.href = './';
    } else {
      attachValidation();
    }
  };

  var attachValidation = function() {
    $('.login').find('input,textarea,select').jqBootstrapValidation({
      preventSubmit: true,
      submitSuccess: function($form, event) {
        event.preventDefault();
        $('.login').find('.dimmer').removeClass('hidden');
        doLogin(event);
      },
      filter: function() {
        return $(this).is(':visible');
      }
    });
  };

  var doLogin = function() {
    var data = {
      username: $('#username').val(),
      password: $('#password').val()
    };

    $.cookie('token', new Date());
    location.href= './';
  };

  return {
    init: init
  };

})($);
