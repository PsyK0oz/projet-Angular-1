// contact.component.ts
import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
  }
}
