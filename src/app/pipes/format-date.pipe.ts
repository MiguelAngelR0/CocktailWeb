import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return 'N/A'; // Devuelve 'N/A' si la fecha no está disponible
    }

    // Convierte la fecha al formato dd/MM/yyyy
    const formattedDate = new Date(value).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    return formattedDate;
  }
}
