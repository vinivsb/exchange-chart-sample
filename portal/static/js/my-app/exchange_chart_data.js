Rate.ExchangeChart.Data = (function(){
  function Data(code, name) {
    this.code = code;
    this.name = name;
  }
 
  Data.fn = Data.prototype;

  Data.fn.request = function() {
      var that = this
      , deferred = $.Deferred()
      , response = $.ajax({
        type: "GET", 
         url: "/home/get_quotation/" + that.code + "/"
      });

      response.done(function(data){
        deferred.resolve(this.getSettings(data));
      }.bind(this));

      response.fail(function(xhr){
        deferred.reject(xhr);
      });

      return deferred.promise();
    };

    Data.fn.getSettings = function(data) {
      var json = JSON.parse(data)
      , settings = {
          rangeSelector: {selected : 1},
          title: {text: "Cotação " + this.name + " (" + this.code + ")"},
          xAxis: {categories: []},
          yAxis: {title: {text: "Preço em Reais (" + json.to + ")"}},
          series:[{
            name: this.name, 
            data: [], 
            tooltip: {valueDecimals: 4}
          }]
        };

      $.each(json.rates, function(date, quotation){
        settings.xAxis.categories.push(date);
        settings.series[0].data.push(parseFloat(quotation.rate));
      });

      return settings;
    };
 
  return Data;
})();