import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { Message } from './model/message.interface'
import { Observable } from 'rxjs'

const generateLocaleDate = (unixTime: number) => new Date(unixTime).toLocaleString()

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private db: AngularFirestore) {
  }

  getAllMessagesFromDupa(): Observable<Message[]> {
    return this.db.collection('chat-message').valueChanges() as Observable<Message[]>
  }

  sendMessage(value: Message) {
    value.timestamp = generateLocaleDate(Date.now())
    this.db.collection('chat-message').add(value)
  }
}
