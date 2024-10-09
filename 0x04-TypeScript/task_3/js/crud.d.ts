// Importing RowElement and RowID types from the './interface' module
import { RowElement, RowID } from './interface';

// Declaring function to insert a new row
// Accepting a row object of type RowElement and returns the ID of the inserted row as a number
declare function insertRow(row: RowElement): number;

// Declaring the function to delete a row
// Accepting the ID of the row to be deleted, which is of type RowID, and doesn't return anything
declare function deleteRow(rowId: RowID): void;

// Declaring the function to update an existing row
// Accepting the row ID (RowID) and the updated row data (RowElement), and returning the updated row ID as a number
declare function updateRow(rowId: RowID, row: RowElement): number;
