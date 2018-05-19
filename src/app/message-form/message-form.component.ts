import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "../message.service";
import {Observable} from "rxjs";
import {Message} from "../model/message.interface";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {


  form: FormGroup = this.formBuilder.group({
      sender: ['', Validators.required],
      content: ['', Validators.required],
      link: [''],
      image: ['']
  });

  constructor(private formBuilder: FormBuilder,
              private messageService: MessageService) {

}

  ngOnInit() {
  }

    onAddMessage() {
      if (this.form.valid) {
        this.messageService.sendMessage(this.form.value);
      }
    }
}
