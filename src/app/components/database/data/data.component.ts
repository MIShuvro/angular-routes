import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params.id);
    });
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
