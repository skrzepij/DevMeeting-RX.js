import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/internal/operators'
import { MessageService } from './message.service'
import { Message } from './model/message.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  items: Observable<Message[]>

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.items = this.messageService.getAllMessagesFromDupa().pipe(
      map(items => items.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1))
    )
  }
}
