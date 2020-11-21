import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "lowercasePipe"
})
export class LowercasePipePipe implements PipeTransform {
  transform(value: string, args?: string): string {
    return value.toLowerCase();
  }
}
