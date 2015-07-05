/// <reference path="_ref.ts" />
/// <reference path="_ref.ts" />
/// <reference path="_ref.ts" />
/// <reference path="_ref.ts" />
var NgRelativeStrengthCalculator;
(function (NgRelativeStrengthCalculator) {
    NgRelativeStrengthCalculator.moduleName = 'ng-relative-strength-calculator';
    angular.module(NgRelativeStrengthCalculator.moduleName, []);
})(NgRelativeStrengthCalculator || (NgRelativeStrengthCalculator = {}));
/// <reference path="_ref.ts" />
var NgRelativeStrengthCalculator;
(function (NgRelativeStrengthCalculator) {
    var RelativeStrengthService = (function () {
        /*@ngInject*/
        function RelativeStrengthService($q, $http) {
            this.$q = $q;
            this.$http = $http;
        }
        RelativeStrengthService.$inject = ["$q", "$http"];
        Object.defineProperty(RelativeStrengthService.prototype, "baseUrl", {
            get: function () {
                return 'http://rscalc.azurewebsites.net/';
            },
            enumerable: true,
            configurable: true
        });
        RelativeStrengthService.prototype.buildRequestUrl = function (formula, weightUnits) {
            if (!formula) {
                throw new Error('formula is falesy');
            }
            if (!weightUnits) {
                throw new Error('weightUnits is falesy');
            }
            return "" + this.baseUrl + formula + "/" + weightUnits;
        };
        RelativeStrengthService.prototype.metaData = function () {
            var promise = this.$q.defer();
            var metaData = {
                formulas: {},
                weightUnits: {},
                sexes: {},
                $promise: promise.promise
            };
            this.$q.all([
                this.$http.get("" + this.baseUrl + "api/metadata/formulas"),
                this.$http.get("" + this.baseUrl + "api/metadata/weightUnits"),
                this.$http.get("" + this.baseUrl + "api/metadata/sexes")
            ]).then(function (data) {
                metaData.formulas = data[0].data;
                metaData.weightUnits = data[1].data;
                metaData.sexes = data[2].data;
                promise.resolve(metaData);
            }).catch(function (err) {
                promise.reject(err);
            });
            return metaData;
        };
        RelativeStrengthService.prototype.results = function (formula, weightUnits, requests) {
            var promise = this.$q.defer();
            var results = [];
            results.$promise = this.$http.post(this.buildRequestUrl(formula, weightUnits), requests);
            results.$promise.then(function (data) {
                angular.copy(data.data, results);
                promise.resolve(results);
            }).catch(function (err) {
                promise.reject(err);
            });
            return results;
        };
        RelativeStrengthService.id = 'relativeStrengthService';
        return RelativeStrengthService;
    })();
    NgRelativeStrengthCalculator.RelativeStrengthService = RelativeStrengthService;
    angular.module(NgRelativeStrengthCalculator.moduleName).service(RelativeStrengthService.id, RelativeStrengthService);
})(NgRelativeStrengthCalculator || (NgRelativeStrengthCalculator = {}));
/// <reference path="../.tmp/typings/tsd.d.ts" />
/// <reference path="icalculatorrequest.ts" />
/// <reference path="icalculatorresult.ts" />
/// <reference path="icalculatorresults.ts" />
/// <reference path="irelativestrengthmetadata.ts" />
/// <reference path="module.ts" />
/// <reference path="relative-strength-calculator.service.ts" />
/// <reference path="_ref.ts" />
