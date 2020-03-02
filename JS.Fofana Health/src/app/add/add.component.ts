import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { Employee } from '../models/employee';
import { Deductible } from '../models/deductible';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  private userDB ='/JSFofanaHealth/user';
  private personDB ='/JSFofanaHealth/person';
  private user = new Employee();
  private p1 = new Person();
  private p2 = new Person();
  private p3 = new Person();
  private p4 = new Person();
  private p5 = new Person();
  private p6 = new Person();
  private p7 = new Person();
  private p8 = new Person();
  private p9 = new Person();
  private p10 = new Person();
  private p11 = new Person();
  private p12 = new Person();
  private p13 = new Person();
  private p14 = new Person();
  private p15 = new Person();
  private p16 = new Person();
  private p17 = new Person();
  private p18 = new Person();
  private p19 = new Person();
  private p20 = new Person();
  private d1 = new Deductible();
  private d2 = new Deductible();
  private d3 = new Deductible();
  private d4 = new Deductible();
  
  constructor(private repository: AngularFireDatabase) { }

  ngOnInit() {
    this.user.email='master@yahoo.com';
    this.user.firstname='Zara';
    this.user.lastname='Koroma';
    this.user.password='demo';

    //low
    this.d1.family = 3500;
    this.d1.generic = 1000;
    this.d1.hospitalER = 6750;
    this.d1.individual = 2600;
    this.d1.urgentCare = 3200;

    //low
    this.d2.family = 3250;
    this.d2.generic = 1200;
    this.d2.hospitalER = 6600;
    this.d2.individual = 2370;
    this.d2.urgentCare = 3400;

    //high
    this.d3.family = 6870;
    this.d3.generic = 2100;
    this.d3.hospitalER = 11500;
    this.d3.individual = 5230;
    this.d3.urgentCare = 6500;

    //high
    this.d4.family = 7200;
    this.d4.generic = 1900;
    this.d4.hospitalER = 10800;
    this.d4.individual = 5150;
    this.d4.urgentCare = 6750;

    this.p1.id=1111162141;
    this.p1.firstname='John';
    this.p1.lastname='Doe';
    this.p1.ssn = 437343297;
    this.p1.address='14011 Royal Shadows Arlington, TX, 77908';
    this.p1.question='What is the name of your 1st grade teacher';
    this.p1.answer='Mrs. Read';
    this.p1.plan='High Deductible';
    this.p1.provider='Revature Health';
    this.p1.startDate='06/18/2002';
    this.p1.deductibles = this.d3;

    this.p2.id=1111142144;
    this.p2.firstname='James';
    this.p2.lastname='Smith';
    this.p2.ssn = 437343247;
    this.p2.address='17041 Windy Shadows Dallas, TX, 79405';
    this.p2.question='What is the name of your 1st pet';
    this.p2.answer='Rowdy';
    this.p2.plan='High Deductible';
    this.p2.provider='Revature Health';
    this.p2.startDate='07/14/2001';
    this.p2.deductibles = this.d4;

    this.p3.id=1113162144;
    this.p3.firstname='Patricia';
    this.p3.lastname='Williams';
    this.p3.ssn = 537343297;
    this.p3.address='26011 Royal Bank New York, NY, 77407';
    this.p3.question='What is the name of your 1st job';
    this.p3.answer='McDonalds';
    this.p3.plan='High Deductible';
    this.p3.provider='Fastenal Health';
    this.p3.startDate='03/19/1995';
    this.p3.deductibles = this.d4;

    this.p4.id=1111162184;
    this.p4.firstname='Jennifer';
    this.p4.lastname='Brown';
    this.p4.ssn = 737343197;
    this.p4.address='54011 Royal Lake Houston, TX, 77082';
    this.p4.question='What is the name of your 1st grade teacher';
    this.p4.answer='Mrs. Write';
    this.p4.plan='High Deductible';
    this.p4.provider='Fastenal Health';
    this.p4.startDate='11/17/2014';
    this.p4.deductibles = this.d3;

    this.p5.id=1161162144;
    this.p5.firstname='Ali';
    this.p5.lastname='Bangura';
    this.p5.ssn = 467343497;
    this.p5.address='32011 Canyon Gate Miami, FL, 77469';
    this.p5.question='What is the name of your 1st pet';
    this.p5.answer='Rover';
    this.p5.plan='Low Deductible';
    this.p5.provider='Academy Health';
    this.p5.startDate='08/21/2011';
    this.p5.deductibles = this.d1;

    this.p6.id=1111762144;
    this.p6.firstname='Omar';
    this.p6.lastname='Kamara';
    this.p6.ssn = 637343997;
    this.p6.address='15111 Foster Lane New Orleans, LA, 78569';
    this.p6.question='What is the name of your 1st job';
    this.p6.answer='Walmart';
    this.p6.plan='Low Deductible';
    this.p6.provider='Academy Health';
    this.p6.startDate='05/27/2009';
    this.p6.deductibles = this.d2;

    this.p7.id=1111162254;
    this.p7.firstname='Fanta';
    this.p7.lastname='Sesay';
    this.p7.ssn = 477543297;
    this.p7.address='15062 Briscoe Lane Boston, MA, 74123';
    this.p7.question='What is the color of your 1st vehicle';
    this.p7.answer='Red';
    this.p7.plan='Low Deductible';
    this.p7.provider='Cinemark Health';
    this.p7.startDate='10/08/2004';
    this.p7.deductibles = this.d1;

    this.p8.id=1111162274;
    this.p8.firstname='Abdul';
    this.p8.lastname='Mansary';
    this.p8.ssn = 637341299;
    this.p8.address='15095 Reese Street Houston, TX, 76521';
    this.p8.question='What is the color of your 1st vehicle';
    this.p8.answer='Black';
    this.p8.plan='Low Deductible';
    this.p8.provider='Cinemark Health';
    this.p8.startDate='04/03/2017';
    this.p8.deductibles = this.d2;

    this.p9.id=1111162354;
    this.p9.firstname='Fatima';
    this.p9.lastname='Mansary';
    this.p9.ssn = 737743298;
    this.p9.address='15074 Six Flags Road Houston, TX, 77958';
    this.p9.question='What is the color of your 1st vehicle';
    this.p9.answer='Gray';
    this.p9.plan='High Deductible';
    this.p9.provider='Revature Health';
    this.p9.startDate='05/25/2015';
    this.p9.deductibles = this.d4;

    this.p10.id=1115162144;
    this.p10.firstname='Foday';
    this.p10.lastname='Bangura';
    this.p10.ssn = 837343594;
    this.p10.address='15751 Galveston Shadows Lubbock, TX, 74154';
    this.p10.question='What is the name of your 1st grade teacher';
    this.p10.answer='Mrs. Brown';
    this.p10.plan='High Deductible';
    this.p10.provider='Revature Health';
    this.p10.startDate='11/11/2011';
    this.p10.deductibles = this.d3;

    this.p11.id=1119162144;
    this.p11.firstname='Paula';
    this.p11.lastname='García';
    this.p11.ssn = 487445297;
    this.p11.address='14111 Rodel Road El Paso, TX, 76998';
    this.p11.question='What is the name of your 1st job';
    this.p11.answer='Krogers';
    this.p11.plan='High Deductible';
    this.p11.provider='Fastenal Health';
    this.p11.startDate='08/08/2018';
    this.p11.deductibles = this.d4;

    this.p12.id=1156162144;
    this.p12.firstname='Lucas';
    this.p12.lastname='Lopez';
    this.p12.ssn = 438346217;
    this.p12.address='15451 Concrete Jungle Austin, TX, 71223';
    this.p12.question='What is the name of your 1st pet';
    this.p12.answer='Hope';
    this.p12.plan='Low Deductible';
    this.p12.provider='Fastenal Health';
    this.p12.startDate='12/15/2005';
    this.p12.deductibles = this.d1;

    this.p13.id=1111232144;
    this.p13.firstname='Martin';
    this.p13.lastname='Hernandez';
    this.p13.ssn = 337323297;
    this.p13.address='51011 Java Street Fort Worth, TX, 71224';
    this.p13.question='What is the color of your 1st vehicle';
    this.p13.answer='Silver';
    this.p13.plan='Low Deductible';
    this.p13.provider='Academy Health';
    this.p13.startDate='11/19/1997';
    this.p13.deductibles = this.d2;

    this.p14.id=1236162254;
    this.p14.firstname='Emily';
    this.p14.lastname='Tran';
    this.p14.ssn = 237346247;
    this.p14.address='15022 TypeScript Road Arlington, TX, 75668';
    this.p14.question='What is the name of your 1st grade teacher';
    this.p14.answer='Mr. Right';
    this.p14.plan='Low Deductible';
    this.p14.provider='Academy Health';
    this.p14.startDate='9/5/1993';
    this.p14.deductibles = this.d2;

    this.p15.id=1111234144;
    this.p15.firstname='Jeong';
    this.p15.lastname='Lee';
    this.p15.ssn = 437393299;
    this.p15.address='15011 AWS Cloud Mclean, VA, 77154';
    this.p15.question='What is the make of your 1st vehicle';
    this.p15.answer='Honda';
    this.p15.plan='High Deductible';
    this.p15.provider='Revature Health';
    this.p15.startDate='10/20/2001';
    this.p15.deductibles = this.d4;
    
  }

  add(){
    //this.repository.list(this.userDB).push(this.u1);
    // this.repository.list(this.personDB).push(this.p1);
    // this.repository.list(this.personDB).push(this.p2);
    // this.repository.list(this.personDB).push(this.p3);
    // this.repository.list(this.personDB).push(this.p4);
    // this.repository.list(this.personDB).push(this.p5);
    // this.repository.list(this.personDB).push(this.p6);
    // this.repository.list(this.personDB).push(this.p7);
    // this.repository.list(this.personDB).push(this.p8);
    // this.repository.list(this.personDB).push(this.p9);
    // this.repository.list(this.personDB).push(this.p10);
    // this.repository.list(this.personDB).push(this.p11);
    // this.repository.list(this.personDB).push(this.p12);
    // this.repository.list(this.personDB).push(this.p13);
    // this.repository.list(this.personDB).push(this.p14);
    // this.repository.list(this.personDB).push(this.p15);
    //this.repository.list(this.personDB).push(this.p16);
    //this.repository.list(this.personDB).push(this.p17);
    //this.repository.list(this.personDB).push(this.p18);
    //this.repository.list(this.personDB).push(this.p19);
    //this.repository.list(this.personDB).push(this.p20);
    console.log('added');
  }
}
