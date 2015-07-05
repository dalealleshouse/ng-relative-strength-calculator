﻿/// <reference path="_ref.ts" />
module NgRelativeStrengthCalculator {
    export interface IRelativeStrengthMetaData {
        formulas: { [path: number]: string; };
        weightUnits: { [path: number]: string; };
        sexes: { [path: number]: string; };
        $promise: ng.IPromise<IRelativeStrengthMetaData>;
    }
}
