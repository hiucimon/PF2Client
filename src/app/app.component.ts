
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPF2Attribute} from '../pf2attribute';
import {Observable} from 'rxjs';
import {IPF2Ancestry} from '../../pf2ancestry';
import {IPF2Class} from '../../pf2class';
import {IPF2Background} from '../../pf2background';
import {Pf2dataService} from './pf2data.service';
import {ICharacter} from './Character';

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
  public character:ICharacter;
  public a;
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
    this.character=new class implements ICharacter {
      Age: number;
      Alignment: string;
      Ancestry: string;
      ArmorClass: { AC: { Training: number; Item: number; DexCap: number }; TAC: { Training: number; Item: number; DexCap: number } };
      ArmorProficiencies: { Name: string; Training: number }[];
      Attributes: { Name: string; LongName: string; Score: number; Modifier: number }[];
      Background: string;
      Class: { Name: string; Level: number };
      Deity: string;
      Gender: string;
      Language: string[];
      MeleeStrikes: { Name: string; Ability: string; Training: number; Item: number; Damage: { StrMod: number; Bludgeoning: boolean; Piercing: boolean; Slashing: boolean; Training: number; OtherDamage: number; Traights: string[] } }[];
      Name: string;
      Perception: { Training: number; Item: number; Effective: number };
      RangedStrikes: { Name: string; DexMod: number; Training: number; Item: number; Damage: { Bludgeoning: boolean; Piercing: boolean; Slashing: boolean; OtherDamage: number; Range: number; Traights: string[] } }[];
      SavingThrows: { Fortitude: { Training: number; Item: number; Effective: number }; Reflex: { Training: number; Item: number; Effective: number }; Will: { Training: number; Item: number; Effective: number } };
      Size: string;
      Skills: { Name: string; SubName: string; Signature: boolean; Attribute: string; Mod: number; Training: number; Item: number; ArmorEffect: boolean; Armor: number }[];
      Speed: number;
      WeaponProficiencies: { Name: string; Training: number }[];
    };
    this.a='junk;'
    this.getAttributes().subscribe(data => this.PF2Attributes = data);
    // this.getAncestries().subscribe(data => this.PF2Ancestry = data);
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

