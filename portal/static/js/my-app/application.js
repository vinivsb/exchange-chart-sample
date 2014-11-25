Rate.Application = (function(){
  function Application(container) {
    this.container = $(container);
    this.ExchangeChart = new Rate.ExchangeChart(this.container.find("#highchart"));
    this.currenciesMenu = new Rate.CurrenciesMenu(
      this.container.find(".currencies"),
      this.ExchangeChart
      );
  }

  Application.fn = Application.prototype;

  Application.fn.run = function() {
    this.currenciesMenu.init();
    this.ExchangeChart.init();
  };
 
  return Application;
})();