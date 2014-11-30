$(function() {
  function Mailr(options) {
    options = options || {};
    this._id = options.id || 'mailr';
    this._$form = $('#' + this._id);
    if(!this._$form.length) throw new Error('Mailr failed to initialise, no form found');
  }

  Mailr.prototype.init = function() {
    var self = this;
    this._$form.submit(function(e) {
      e.preventDefault();
      self._send();
    });
    $('input, textarea', this._$form).focus(function() {
      self._reset();
    });
  };

  Mailr.prototype._send = function() {
    this._changeIcon('circle-o-notch fa-spin');
    var self = this;
    $.post(this._$form.prop('action'), this._$form.serialize(), function(data) {
      if(data.success) return self._handleSuccess();
    });
  };

  Mailr.prototype._reset = function() {
    this._changeIcon('send');
    this._changeText('Send');
  };

  Mailr.prototype._handleSuccess = function() {
    this._changeIcon('check');
    this._changeText('Sent!');
    this._$form[0].reset();
  };

  Mailr.prototype._changeIcon = function(icon) {
    $('button .fa', this._$form).attr('class', 'fa fa-' + icon);
  };

  Mailr.prototype._changeText = function(text) {
    $('button span', this._$form).html(text);
  };

  window.Mailr = Mailr;
});
