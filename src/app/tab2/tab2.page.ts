import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { FotoService } from '../service/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public FotoService:FotoService) {}

  TambahFoto(){
    this.FotoService.tambahFoto();
  }
}
