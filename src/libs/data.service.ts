import { Injectable } from "@angular/core";

@Injectable()
export class DataService{

    users = [
        {
            firstName: 'Haris',
            lastName: 'Khan'
        },
        {
            firstName: 'Aleem',
            lastName: 'Dar'
        },
        {
            firstName: 'Shahid',
            lastName: 'Afridi'
        },
        {
            firstName: 'Raja',
            lastName: 'Ali'
        },
    ]
}