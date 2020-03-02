import { Component, OnInit } from '@angular/core';
import { UnsubscribeService } from 'src/app/services/unsubscribe.service';
import { UserService } from 'src/app/services/user.service';
import { Person } from 'schematics-utilities';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  private term: string;
  records: Person[];

  constructor(private service: UserService, private memory: UnsubscribeService) { }

  ngOnInit() {
    this.service.getAllRecords().pipe(takeUntil(this.memory.unsubscribe)).subscribe(data=>this.records=data);
  }

  ngOnDestroy(){
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
}
