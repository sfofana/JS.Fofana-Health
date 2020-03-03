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
  private p21 = new Person();
  private p22 = new Person();
  private p23 = new Person();
  private p24 = new Person();
  private p25 = new Person();
  private p26 = new Person();
  private p27 = new Person();
  private p28 = new Person();
  private p29 = new Person();
  private p30 = new Person();
  private p31 = new Person();
  private p32 = new Person();
  private p33 = new Person();
  private p34 = new Person();
  private p35 = new Person();
  private p36 = new Person();
  private p37 = new Person();
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
    this.p15.address='15411 AWS Cloud Mclean, VA, 77154';
    this.p15.question='What is the make of your 1st vehicle';
    this.p15.answer='Honda';
    this.p15.plan='High Deductible';
    this.p15.provider='Revature Health';
    this.p15.startDate='10/20/2001';
    this.p15.deductibles = this.d4;

    this.p16.id=1118302283;
    this.p16.firstname='Anthony';
    this.p16.lastname='Jones';
    this.p16.ssn = 389020450;
    this.p16.address='15081 S3 Bucket Mclean, VA, 78154';
    this.p16.question='What is the make of your 1st vehicle';
    this.p16.answer='Toyota';
    this.p16.plan='High Deductible';
    this.p16.provider='Academy Health';
    this.p16.startDate='01/21/2011';
    this.p16.deductibles = this.d4;

    this.p17.id=1112067567;
    this.p17.firstname='Paul';
    this.p17.lastname='Davis';
    this.p17.ssn = 306262260;
    this.p17.address='45011 EC2 Compute Houston, TX, 77153';
    this.p17.question='What is the make of your 1st vehicle';
    this.p17.answer='Acura';
    this.p17.plan='Low Deductible';
    this.p17.provider='Fastenal Health';
    this.p17.startDate='02/22/2002';
    this.p17.deductibles = this.d2;

    this.p18.id=1142373194;
    this.p18.firstname='Donna';
    this.p18.lastname='Miller';
    this.p18.ssn = 595317416;
    this.p18.address='14211 Google Angular Mclean, VA, 77154';
    this.p18.question='What is the make of your 1st vehicle';
    this.p18.answer='BMW';
    this.p18.plan='High Deductible';
    this.p18.provider='Fastenal Health';
    this.p18.startDate='04/23/2014';
    this.p18.deductibles = this.d4;

    this.p19.id=1118569154;
    this.p19.firstname='Susan';
    this.p19.lastname='Wilson';
    this.p19.ssn = 487152289;
    this.p19.address='15041 Google Go Arlington, VA, 77154';
    this.p19.question='What is the make of your 1st vehicle';
    this.p19.answer='Scion';
    this.p19.plan='Low Deductible';
    this.p19.provider='Academy Health';
    this.p19.startDate='11/14/2016';
    this.p19.deductibles = this.d1;

    this.p20.id=1115779593;
    this.p20.firstname='Linda';
    this.p20.lastname='Wang';
    this.p20.ssn = 301976114;
    this.p20.address='52011 Google Go Mclean, VA, 74154';
    this.p20.question='What is the make of your 1st vehicle';
    this.p20.answer='Chevy';
    this.p20.plan='High Deductible';
    this.p20.provider='Fastenal Health';
    this.p20.startDate='05/16/2017';
    this.p20.deductibles = this.d4;

    this.p21.id=1167103033;
    this.p21.firstname='Patrick';
    this.p21.lastname='Devi';
    this.p21.ssn = 621065597;
    this.p21.address='14111 Java Spring Dallas, TX, 77124';
    this.p21.question='What is the make of your 1st vehicle';
    this.p21.answer='Toyota';
    this.p21.plan='Low Deductible';
    this.p21.provider='Revature Health';
    this.p21.startDate='12/08/2008';
    this.p21.deductibles = this.d1;

    this.p22.id=1125363037;
    this.p22.firstname='Douglas';
    this.p22.lastname='Zhang';
    this.p22.ssn = 476823284;
    this.p22.address='12011 AWS Cloud New York, NY, 71234';
    this.p22.question='What is the make of your 1st vehicle';
    this.p22.answer='Honda';
    this.p22.plan='Low Deductible';
    this.p22.provider='Fastenal Health';
    this.p22.startDate='03/27/2001';
    this.p22.deductibles = this.d2;

    this.p23.id=1117267424;
    this.p23.firstname='Arthur';
    this.p23.lastname='Li';
    this.p23.ssn = 675015509;
    this.p23.address='14011 Google Cloud Mclean, VA, 77154';
    this.p23.question='What is the make of your 1st vehicle';
    this.p23.answer='Lexus';
    this.p23.plan='Low Deductible';
    this.p23.provider='Revature Health';
    this.p23.startDate='06/19/2004';
    this.p23.deductibles = this.d1;

    this.p24.id=1169400158;
    this.p24.firstname='Sean';
    this.p24.lastname='Liu';
    this.p24.ssn = 647761038;
    this.p24.address='12311 Google Firebase Boston, MA, 77154';
    this.p24.question='What is the make of your 1st vehicle';
    this.p24.answer='Ford';
    this.p24.plan='High Deductible';
    this.p24.provider='Cinemark Health';
    this.p24.startDate='08/17/2011';
    this.p24.deductibles = this.d3;

    this.p25.id=1152347785;
    this.p25.firstname='Sara';
    this.p25.lastname='Singh';
    this.p25.ssn = 643196222;
    this.p25.address='15141 Heroku Paas Mclean, VA, 74154';
    this.p25.question='What is the make of your 1st vehicle';
    this.p25.answer='Dodge';
    this.p25.plan='High Deductible';
    this.p25.provider='Revature Health';
    this.p25.startDate='09/15/2009';
    this.p25.deductibles = this.d4;

    this.p26.id=1122839757;
    this.p26.firstname='Denise';
    this.p26.lastname='Yang';
    this.p26.ssn = 388798150;
    this.p26.address='15012 AWS Cloud Houston, TX, 77684';
    this.p26.question='What is the make of your 1st vehicle';
    this.p26.answer='Honda';
    this.p26.plan='Low Deductible';
    this.p26.provider='Fastenal Health';
    this.p26.startDate='10/22/2015';
    this.p26.deductibles = this.d1;

    this.p27.id=1197911408;
    this.p27.firstname='Jane';
    this.p27.lastname='Kumar';
    this.p27.ssn = 794412803;
    this.p27.address='14011 Asauna Cloud El Paso, TX, 77154';
    this.p27.question='What is the make of your 1st vehicle';
    this.p27.answer='Toyota';
    this.p27.plan='Low Deductible';
    this.p27.provider='Academy Health';
    this.p27.startDate='09/20/2001';
    this.p27.deductibles = this.d2;

    this.p28.id=1126385635;
    this.p28.firstname='Vincent';
    this.p28.lastname='Jallow';
    this.p28.ssn = 774494064;
    this.p28.address='15141 AWS Service Austin, TX, 77154';
    this.p28.question='What is the make of your 1st vehicle';
    this.p28.answer='Acura';
    this.p28.plan='Low Deductible';
    this.p28.provider='Revature Health';
    this.p28.startDate='08/24/2001';
    this.p28.deductibles = this.d2;

    this.p29.id=1154626250;
    this.p29.firstname='Eugene';
    this.p29.lastname='Khan';
    this.p29.ssn = 368689712;
    this.p29.address='15351 AWS Amplify Austin, TX, 77154';
    this.p29.question='What is the make of your 1st vehicle';
    this.p29.answer='Audi';
    this.p29.plan='High Deductible';
    this.p29.provider='Fastenal Health';
    this.p29.startDate='12/20/2011';
    this.p29.deductibles = this.d3;

    this.p30.id=1141685959;
    this.p30.firstname='Teresa';
    this.p30.lastname='Gomes';
    this.p30.ssn = 651204864;
    this.p30.address='15781 AWS S3 Dallas, TX, 77154';
    this.p30.question='What is the make of your 1st vehicle';
    this.p30.answer='Honda';
    this.p30.plan='High Deductible';
    this.p30.provider='Cinemark Health';
    this.p30.startDate='11/21/2020';
    this.p30.deductibles = this.d4;
    
    this.p31.id=1217711453;
    this.p31.firstname='Alice';
    this.p31.lastname='Juma';
    this.p31.ssn = 830953910;
    this.p31.address='15741 Java MVC Austin, TX, 77154';
    this.p31.question='What is the make of your 1st vehicle';
    this.p31.answer='Mazda';
    this.p31.plan='High Deductible';
    this.p31.provider='Fastenal Health';
    this.p31.startDate='05/26/2001';
    this.p31.deductibles = this.d3;

    this.p32.id=1284107763;
    this.p32.firstname='Cheryl';
    this.p32.lastname='Devi';
    this.p32.ssn = 531220122;
    this.p32.address='16511 Java Microservice Houston, TX, 77154';
    this.p32.question='What is the make of your 1st vehicle';
    this.p32.answer='Ford';
    this.p32.plan='High Deductible';
    this.p32.provider='Revature Health';
    this.p32.startDate='10/23/2004';
    this.p32.deductibles = this.d3;

    this.p33.id=1128892476;
    this.p33.firstname='Frances';
    this.p33.lastname='Cohen';
    this.p33.ssn = 449574276;
    this.p33.address='45011 NodeJS Express Dallas, TX, 77154';
    this.p33.question='What is the make of your 1st vehicle';
    this.p33.answer='Mazda';
    this.p33.plan='Low Deductible';
    this.p33.provider='Revature Health';
    this.p33.startDate='02/27/2006';
    this.p33.deductibles = this.d2;

    this.p34.id=1215373542;
    this.p34.firstname='Olivia';
    this.p34.lastname='Khaled';
    this.p34.ssn = 700044642;
    this.p34.address='15054 Road to Six Flags Arlington, TX, 77154';
    this.p34.question='What is the make of your 1st vehicle';
    this.p34.answer='Chevy';
    this.p34.plan='Low Deductible';
    this.p34.provider='Academy Health';
    this.p34.startDate='11/20/2007';
    this.p34.deductibles = this.d1;

    this.p35.id=1169264020;
    this.p35.firstname='Noah';
    this.p35.lastname='Rusu';
    this.p35.ssn = 542907354;
    this.p35.address='15021 MongoDB Street San Antonio, TX, 77154';
    this.p35.question='What is the make of your 1st vehicle';
    this.p35.answer='Dodge';
    this.p35.plan='High Deductible';
    this.p35.provider='Fastenal Health';
    this.p35.startDate='03/20/2008';
    this.p35.deductibles = this.d3;

    this.p36.id=1157181239;
    this.p35.firstname='Jeremy';
    this.p36.lastname='Gonzalez';
    this.p36.ssn = 621231693;
    this.p36.address='14011 Firbase DB Humble, TX, 77154';
    this.p36.question='What is the make of your 1st vehicle';
    this.p36.answer='Toyota';
    this.p36.plan='Low Deductible';
    this.p36.provider='Cinemark Health';
    this.p36.startDate='07/22/2002';
    this.p36.deductibles = this.d1;

    this.p37.id=1157186789;
    this.p37.firstname='Ryan';
    this.p37.lastname='Jin';
    this.p37.ssn = 622981123;
    this.p37.address='14361 Firbase Host Humble, TX, 74754';
    this.p37.question='What is the make of your 1st vehicle';
    this.p37.answer='Honda';
    this.p37.plan='Low Deductible';
    this.p37.provider='Academy Health';
    this.p37.startDate='12/20/2005';
    this.p37.deductibles = this.d2;
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
    // this.repository.list(this.personDB).push(this.p16);
    // this.repository.list(this.personDB).push(this.p17);
    // this.repository.list(this.personDB).push(this.p18);
    // this.repository.list(this.personDB).push(this.p19);
    // this.repository.list(this.personDB).push(this.p20);
    // this.repository.list(this.personDB).push(this.p21);
    // this.repository.list(this.personDB).push(this.p22);
    // this.repository.list(this.personDB).push(this.p23);
    // this.repository.list(this.personDB).push(this.p24);
    // this.repository.list(this.personDB).push(this.p25);
    // this.repository.list(this.personDB).push(this.p26);
    // this.repository.list(this.personDB).push(this.p27);
    // this.repository.list(this.personDB).push(this.p28);
    // this.repository.list(this.personDB).push(this.p29);
    // this.repository.list(this.personDB).push(this.p30);
    // this.repository.list(this.personDB).push(this.p31);
    // this.repository.list(this.personDB).push(this.p32);
    // this.repository.list(this.personDB).push(this.p33);
    // this.repository.list(this.personDB).push(this.p34);
    // this.repository.list(this.personDB).push(this.p35);
    // this.repository.list(this.personDB).push(this.p36);
    // this.repository.list(this.personDB).push(this.p37);
    console.log('added');
  }
}
