import { Column } from "../utils/Column.js";
import { GridSystem } from "../utils/GridSystem.js";
import { output } from "../utils/output.js";
import { Row } from "../utils/Row.js";

window.gridSystemExample = gridSystemExample;

export function gridSystemExample() {
    debugger;
    const gridSystem = new GridSystem();
    for (let rowNumber = 1; rowNumber <= 9; rowNumber++) {
            const row = new Row();

        for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
            const column = new Column(`COLUMN ${ columnNumber}`);
            row.addColumn(column);
        }
        gridSystem.addRow(row);
    }
    output (gridSystem);
}


