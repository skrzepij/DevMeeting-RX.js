import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.sass']
})
export class MessageFormComponent implements OnInit {


  form: FormGroup = this.formBuilder.group({
    sender: ['', Validators.required],
    content: ['', Validators.required],
    link: [''],
    image: ['']
  })

  constructor(private formBuilder: FormBuilder,
              private messageService: MessageService) {

  }

  ngOnInit() {
  }

  onAddMessage() {
    if (this.form.valid) {
      this.messageService.sendMessage(this.form.value)
    }
  }
}
