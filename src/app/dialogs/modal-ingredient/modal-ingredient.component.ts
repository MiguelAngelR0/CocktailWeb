import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-ingredient',
  templateUrl: './modal-ingredient.component.html',
  styleUrls: ['./modal-ingredient.component.scss'],
  imports: [CommonModule]
})
export class ModalIngredientComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalIngredientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { ingredients: { name: string; measure: string; imageUrl: string }[] }
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}