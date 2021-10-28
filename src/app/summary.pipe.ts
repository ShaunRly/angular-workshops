import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})

export class SummaryPipe implements PipeTransform{
    transform(value:string, length?:number, param?:any){
        if(!value){
            return null;
        }
        let subLength = !length ? 10 : length
        return value.substring(0, subLength) + "...";
    }
}