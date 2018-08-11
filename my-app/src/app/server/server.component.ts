import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles:[`
    .offline {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverStatus:String = 'Offline';
  serverId = 0;
  serverColor:String = '';
  constructor() { 
    this.serverId = Math.random();
    this.serverStatus = this.serverId > 0.5 ? 'online' : 'offline';
    //this.serverColor = this.serverId > 0.5 ? 'yellow' : 'red';
  }

  getServerStatus(){
    return this.serverColor = this.serverId > 0.5 ? 'yellow' : 'red';
  }

  ngOnInit() {
  }

}
