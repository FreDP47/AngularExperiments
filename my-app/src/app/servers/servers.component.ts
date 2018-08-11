import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewUser: boolean = false;
  serverName = 'Please enter server name';
  textDisplayed = 'no server was created';
  serverCreated = false;
  servers = ['server1', 'server2', 'server3'];
  constructor() { 
    setTimeout(() => {this.allowNewUser = true;},3000)
  }

  ngOnInit() {
  }

  oncCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.textDisplayed = "server created with name" + this.serverName;
  }

  onUserInputEnter(event:any){
    this.serverName = event.target.value;
  }

}
