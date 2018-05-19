import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../model/image.interface";
import {Link} from "../model/link.interface";
import {MessageService} from "../message.service";
import {Message} from "../model/message.interface";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/internal/operators";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    images: Image[];
    links: Link[];

    constructor(private messageService: MessageService) {

    }

    ngOnInit() {

    }

}
