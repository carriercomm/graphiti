Graphiti = window.Graphiti || {};

Graphiti.initTimeFramePicker = function(){
  var el, val;

  el = $('#time-frame input[name=from]');
  if (val = localStorage.getItem('time-frame-from')) {
    el.val(val);
  }
  el.change(function(){ localStorage.setItem("time-frame-from", $(this).val()); location.reload(); });

  el = $('#time-frame input[name=until]');
  if (val = localStorage.getItem('time-frame-until')) {
    el.val(val);
  }
  el.change(function(){ localStorage.setItem("time-frame-until", $(this).val()); location.reload(); });

};

Graphiti.timeFrameOptions = function(){
  var options = {};
  var from = localStorage.getItem('time-frame-from');
  if (from) options['from'] = from;
  var until = localStorage.getItem('time-frame-until');
  if (until) options['until'] = until;
  return options;
};

$(Graphiti.initTimeFramePicker);
