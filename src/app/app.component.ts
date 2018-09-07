
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPF2Attribute} from '../pf2attribute';
import {Observable} from 'rxjs';
import {IPF2Ancestry} from '../../pf2ancestry';
import {IPF2Class} from '../../pf2class';
import {IPF2Background} from '../../pf2background';
import {Pf2dataService} from './pf2data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public PF2Attributes = [];
  public PF2Ancestry = [];
  public PF2Background = [];
  public PF2Class = [];
  public a = [];

  title = 'app';

  constructor(private http: HttpClient,private pf2dataservice:Pf2dataService) {
  }

  getAttributes(): Observable<IPF2Attribute[]> {
    return this.http.get<IPF2Attribute[]>('http://localhost:18080/attributes');
  }

  getAncestries(): Observable<IPF2Ancestry[]> {
    return this.http.get<IPF2Ancestry[]>('http://localhost:18080/ancestries');
  }

  getClasses(): Observable<IPF2Class[]> {
    return this.http.get<IPF2Class[]>('http://localhost:18080/classes');
  }

  getBackgrounds(): Observable<IPF2Background[]> {
    return this.http.get<IPF2Background[]>('http://localhost:18080/ancestries');
  }

  ngOnInit() {
    this.getAttributes().subscribe(data => this.PF2Attributes = data);
    this.getAncestries().subscribe(data => this.PF2Ancestry = data);
    this.getClasses().subscribe(data => this.PF2Class = data);
    this.getBackgrounds().subscribe(data => this.PF2Background = data);
    // this.a = this.pf2dataservice.getTheClasses();
  }
  getActiveClasses() {
    return this.PF2Class.filter(function(value, index, array) {
      return (this.UseSource[value.Source]);
    });
  }
}

