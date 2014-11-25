Rate.ExchangeChart = (function(){
  function ExchangeChart(container) {
  	this.container = container;
  	this.chartPresented = this.container.find(".highcharts-container");
  	this.loading = this.container.find(".loading");
  	this.placeholder = this.container.find(".placeholder");
  }
 
  ExchangeChart.fn = ExchangeChart.prototype;

  ExchangeChart.fn.init = function() {
    this.load("USD", "Dólar");
  };

  ExchangeChart.fn.load = function(code, name) {
  	this.showLoading();
  	var chart_data = new Rate.ExchangeChart.Data(code, name)
    , response = chart_data.request();

  	response.done(this.render.bind(this));
    
  };

  ExchangeChart.fn.showLoading = function(){
  	this.chartPresented.hide();
  	this.loading.show();
  }

  ExchangeChart.fn.render = function(data) {
  	this.loading.hide();
    this.placeholder.highcharts(data);
    this.chartPresented = this.container.find(".highcharts-container");
  };
 
  return ExchangeChart;
})();