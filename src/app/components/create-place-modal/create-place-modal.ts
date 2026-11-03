import { Component, ElementRef, inject, output, viewChild } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface PlaceFormValue {
  location: string;
  googleMapsUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-create-place-modal',
  styleUrl: './create-place-modal.scss',
  templateUrl: './create-place-modal.html',
})
export class CreatePlaceModal {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  create = output<PlaceFormValue>();

  protected readonly form = this.fb.group({
    location: ['', Validators.required],
    googleMapsUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
    title: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    description: ['', Validators.required],
  });

  open() {
    this.dialog().nativeElement.showModal();
  }

  protected close() {
    this.dialog().nativeElement.close();
  }

  protected submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.create.emit(this.form.getRawValue());
    this.close();
  }
}
