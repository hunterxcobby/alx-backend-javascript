// ambient file within task_3/js - crud.d.ts
// containing the type declarations for each crud function.

// import RowID & RowElement from ./interface.ts
import { RowID, RowElement } from '../interface.ts'

// Declare the crud module
declare module 'crud' {
  // declare type declarations for each crud function
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
export function insertRow(row: RowElement): number {
  throw new Error('Function not implemented.');
}

export function updateRow(newRowID: number, updatedRow: RowElement) {
  throw new Error('Function not implemented.');
}

export function deleteRow(newRowID: number) {
  throw new Error('Function not implemented.');
}

