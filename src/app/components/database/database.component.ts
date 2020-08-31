import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
})
export class DatabaseComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('object')
    this.servers = this.serversService.getServers();
  }

  loadDatabase() {

    //this.router.navigate(['/database'],{relativeTo:this.route})

  }
}
