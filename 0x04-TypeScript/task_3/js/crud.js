// Function to insert a row
// Logging the row being inserted and returning a random ID for the inserted row
export function insertRow(row) {
    console.log('Insert row', row);  // Log the row details
    return Math.floor(Math.random() * Math.floor(1000));  // Generate and return a random row ID (between 0 and 999)
}

// Function to delete a row
// Logging the row ID being deleted; this function doesn't return anything
export function deleteRow(rowId) {
    console.log('Delete row id', rowId);  // Log the row ID being deleted
    return;  // No return value (void)
}

// Function to update a row
// Logging the row ID being updated and the updated row data, then returning the row ID
export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);  // Log the row ID and updated row data
    return rowId;  // Return the row ID after updating
}
