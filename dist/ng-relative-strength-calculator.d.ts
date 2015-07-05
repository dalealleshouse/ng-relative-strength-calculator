/// <reference path=".tmp/typings/tsd.d.ts" />
declare module NgRelativeStrengthCalculator {
    interface ICalculatorResult extends ICalculatorRequest {
        coefficient: number;
        score: number;
    }
}
declare module NgRelativeStrengthCalculator {
    interface ICalculatorResults extends Array<ICalculatorResult> {
        $promise: ng.IPromise<ICalculatorResults>;
    }
}
declare module NgRelativeStrengthCalculator {
    interface IRelativeStrengthMetaData {
        formulas: {
            [path: number]: string;
        };
        weightUnits: {
            [path: number]: string;
        };
        sexes: {
            [path: number]: string;
        };
        $promise: ng.IPromise<IRelativeStrengthMetaData>;
    }
}
declare module NgRelativeStrengthCalculator {
    var moduleName: string;
}
declare module NgRelativeStrengthCalculator {
    interface IRelativeStrengthService {
        baseUrl: string;
        buildRequestUrl: (formula: number | string, weightUnits: number | string) => string;
        metaData: () => IRelativeStrengthMetaData;
        results: (formula: string | number, weightUnits: string | number, requests: Array<ICalculatorRequest>) => ICalculatorResults;
    }
    class RelativeStrengthService implements IRelativeStrengthService {
        private $q;
        private $http;
        static id: string;
        constructor($q: ng.IQService, $http: ng.IHttpService);
        baseUrl: string;
        buildRequestUrl(formula: number | string, weightUnits: number | string): string;
        metaData(): IRelativeStrengthMetaData;
        results(formula: string | number, weightUnits: string | number, requests: ICalculatorRequest[]): ICalculatorResults;
    }
}
declare module NgRelativeStrengthCalculator {
    interface ICalculatorRequest {
        id: string;
        sex: number | string;
        bodyWeight: number;
        weight: number;
    }
}
