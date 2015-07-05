/// <reference path="_ref.ts" />
module NgRelativeStrengthCalculator {
    export interface ICalculatorResults extends Array<ICalculatorResult> {
        $promise: ng.IPromise<ICalculatorResults>;
    }
}
