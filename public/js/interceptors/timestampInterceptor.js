angular.module("app")
  .factory("timestampInterceptor", function () {
    return {
      request: function (config) {
        console.log(config.url);
        return config;
      }
    };
  });
