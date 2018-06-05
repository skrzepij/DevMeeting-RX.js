import { Component, OnInit } from '@angular/core'
import { Image } from '../model/image.interface'
import { Link } from '../model/link.interface'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  images: Image[]
  links: Link[]

  constructor(private messageService: MessageService) {

  }

  ngOnInit() {

  }

}
