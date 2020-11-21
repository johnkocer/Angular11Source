import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "name"
})
export class NamePipe implements PipeTransform {
  transform(value: any, displayPrefix: boolean = true): any {
    let prefix = "";
    if (displayPrefix)
      prefix = value.gender === "male" ? "Mr. " : "Mrs. ";

      return `${prefix}${value.name}`;
  }
}
