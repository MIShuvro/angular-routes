import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css'],
})
export class DataEditComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  editId: number;

  constructor(
    private serversService: ServersService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params["allowEdit"])
      this.allowEdit = params["allowEdit"]==='1'? true:false
    });
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    // this.editId = this.route.snapshot.queryParams['allowEdit'];
  }

  onUpdateServer() {
    console.log(this.editId);
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
