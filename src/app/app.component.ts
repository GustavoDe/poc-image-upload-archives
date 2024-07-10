import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  title = 'poc-image-upload-archive';
  imageSrc: string | ArrayBuffer | null = null;
  documents: any = [
    {
      name: 'RG',
      imageSrc: null,
      file: "",
    },
    {
      name: 'CPF',
      imageSrc: null,
      file: "",
    },
  ];
  currentItemIndex!: number;

  triggerFileInput(itemIndex: number): void {
    this.currentItemIndex = itemIndex;
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.documents[this.currentItemIndex].file = file;
    }
  }

  visualizeImage(file: any) {
    const reader = new FileReader();

    reader.onload = () => {
      this.imageSrc = reader.result;
    };

    reader.readAsDataURL(file);
  }
}
