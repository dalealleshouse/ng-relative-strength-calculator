/// <reference path="_ref.ts" />
module NgRelativeStrengthCalculator {
    export interface ICalculatorResult extends ICalculatorRequest {
        coefficient: number;
        score: number;
    }
}
