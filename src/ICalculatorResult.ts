module NgRelativeStrengthCalculator {
    export interface ICalculatorResult extends ICalculatorRequest {
        coefficient: number;
        score: number;
    }
}
