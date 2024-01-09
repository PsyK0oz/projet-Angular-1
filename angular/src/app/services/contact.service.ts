// contact.service.ts
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    {
      name: 'Pierre-Luc',
      email: 'pierrelucoswald1@gmail.com',
      phone: '0123456789',
      image: 'assets/elipl.jpg',
      details: 'test'
    },
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }
}
