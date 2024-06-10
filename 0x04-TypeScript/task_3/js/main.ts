// main.ts

// Triple slash directive to include dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from '../interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create a row object with RowElement type
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Call updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
