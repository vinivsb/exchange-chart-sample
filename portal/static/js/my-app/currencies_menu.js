Rate.CurrenciesMenu = (function(){
  function CurrenciesMenu(container, chart) {
    this.container = container;
    this.chart = chart;
  }
 
  CurrenciesMenu.fn = CurrenciesMenu.prototype;

  CurrenciesMenu.fn.init = function() {
  	this.container.on('click', 'button', $.proxy(this, 'onClick'));
  };

  CurrenciesMenu.fn.onClick = function(event) {
    var button = $(event.target)
    , curr_code = button.data('code')
    , name = button.html();

    this.container.find(".active").removeClass("active");
    button.addClass("active");

    this.chart.load(curr_code, name);
  };
 
  return CurrenciesMenu;
})();