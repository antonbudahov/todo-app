import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'formatString'
})
export class FormatStringPipe implements PipeTransform {

    transform(value: string): string {
        if (!value) return;
        if (value.length > 245) {
            return value.slice(0, 245) + '...';
        } else {
            return value;
        }
    }

}
