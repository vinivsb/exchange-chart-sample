Rate.ObserverMixin = (function(){
  return function(target) {
    target.observer = $({});
    target.on = $.proxy(target.observer, 'on');
    target.trigger = $.proxy(target.observer, 'trigger');
  };
})();