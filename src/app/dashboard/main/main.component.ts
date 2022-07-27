import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexLegend,
  ApexFill,
  ApexPlotOptions,
  ApexResponsive,
} from 'ng-apexcharts';
import { CoursService } from '../../services/cours.service';
import { notesService } from '../../services/notes.service';
import { PieceService } from 'src/app/services/piece.service';
import { ServiceAbsenceService } from 'src/app/services/service-absence.service';
import { ServiceAchatService } from 'src/app/services/service-achat.service';
import { ServiceComptaService } from 'src/app/services/service-compta.service';
import { EvenementService } from 'src/app/services/evenement.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
};
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public lineChartOptions: Partial<ChartOptions>;
  public barChartOptions: Partial<ChartOptions>;
  public stackBarChart: Partial<ChartOptions>;
  listecours:any;
  listenote:any;
  nbr=0;
  liste3=[];
  moins=0;
  plus=0;
  liste2=[];
  nbrn=0;
  total=0;
  total1=0;
  total12=''
  total0=''
  validation=0;
  plusVal=0;
  listeAbsence:any;
  ListePiece:any;
  nbrAbse=0;
  nbrnPiece=0;
  listeAchat:any;
  ListeCompta:any;
  nbrAchat=0;
  nbrCompta=0;
  listeevenement:any;
  listeDetails:any;
  listeparticipant:any;
  listenombreparticipant:[];
  nbrevenement=0;
  nbrparticipant=0;
  moyenLike=0;
  moyenLikeentier:any;
  nbrlike=0;
  constructor(private doct:CoursService, private doct1:notesService ,private doct2:ServiceAbsenceService, private doct3:PieceService,private doct4:ServiceAchatService, private doct5:ServiceComptaService,private es:EvenementService){

  }
  ngOnInit() {
    this.chart1();
    this.chart2();
    this.chart3();
    this.doct.getcours().subscribe(
      res=>{
      this.listecours=res;
      console.log(this.listecours.length);  
      this.nbr=this.listecours.length;
      console.log(this.nbr);
      }
    )
    this.doct1.getnotes().subscribe(
      res=>{
      this.listenote=res;
      this.nbrn=this.listenote.length;
      console.log(this.nbrn);
      this.listenote.forEach(res=>{
        // console.log(res);
        // @ts-ignore
        if(res.note < 10){
          this.liste3.push(res)
          this.moins=this.liste3.length
          this.total=(this.moins*100)/this.nbrn;
          this.total0=this.total.toFixed(2);
          console.log(this.total);
        }
        if(res.note >= 10){
          this.liste2.push(res)
          this.plus=this.liste2.length
          this.total1=((this.plus*100)/this.nbrn);
          this.total12=this.total1.toFixed(2);
          console.log(this.total1);
        }
      } 
      )
      }
    )
    this.doct2.getAbsence().subscribe(
      res=>{
      this.listeAbsence=res;
      console.log(this.listeAbsence.length);  
      this.nbrAbse=this.listeAbsence.length;
      console.log(this.nbrAbse);
      
      }
    )
    this.doct3.getPiece().subscribe(
      res=>{
      this.ListePiece=res;
      this.nbrnPiece=this.ListePiece.length;
      console.log(this.nbrnPiece);
      this.ListePiece.forEach(res=>{
        // console.log(res);
        // @ts-ignore
        if(res.validation == 'oui'){
          this.liste3.push(res)
          this.validation=this.liste3.length
         // this.total=(this.moins*100)/this.nbrn;
          //this.total0=this.total.toFixed(2);
          console.log(this.validation);
        }
        if(res.validation == 'non'){
          this.liste2.push(res)
          this.plusVal=this.liste2.length
          //this.total1=((this.plus*100)/this.nbrn);
          //this.total12=this.total1.toFixed(2);
          console.log(this.plusVal);
        }

      } 
      )
      }
    )
    this.doct4.getAchats().subscribe(
      res=>{
      this.listeAchat=res;
      this.nbrAchat=this.listeAchat.length;
      
      }
    )
    this.doct5.getCompta().subscribe(
      res=>{
      this.ListeCompta=res;
      this.nbrCompta=this.ListeCompta.length;
      }
    )
    this.es.afficherEvenement().subscribe(
      E=>{
        this.listeevenement=E;
        this.nbrevenement=this.listeevenement.length;
        // console.log('nbr evenement '+this.nbrevenement);
      }
    )


    this.es.afficherParticipant().subscribe(
      P=>{
        this.listeparticipant=P;
        this.nbrparticipant=this.listeparticipant.length;
        // console.log('nbr participation '+this.nbrparticipant);
      }
    )


    this.es.afficherDetails().subscribe(
      P=>{
        this.listeDetails=P;
        // console.log(this.listeDetails)
        // console.log('evenement'+this.nbrevenement)
        this.listeDetails.forEach(p=>{
          this.nbrlike=this.nbrlike+p.like;
          this.moyenLike=this.nbrlike/this.nbrevenement;
          this.moyenLikeentier=Math.round(this.moyenLike)
          console.log(this.moyenLikeentier)
        })
        // console.log('nbr like '+this.moyenLike);

      }
    )

  }
  
  private chart1() {
    this.lineChartOptions = {
      series: [
        {
          name: 'Data 1',
          data: [80, 250, 30, 120, 260, 100, 180],
        },
        {
          name: 'Data 2',
          data: [85, 130, 85, 225, 80, 190, 120],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        foreColor: '#9aa0ac',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#6777EF', '#8B8697'],
      stroke: {
        curve: 'smooth',
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
        borderColor: '#9aa0ac',
      },
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#54CA68', '#EF447C'],
          stops: [0, 50, 65, 91],
        },
      },
      markers: {
        size: 3,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      yaxis: {
        // opposite: true,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
  private chart2() {
    this.barChartOptions = {
      series: [
        {
          name: 'Males',
          data: [2.4, 4.65, 2.88, 2.9, 3.9, 2.2, 3, 4.1, 3.9, 3],
        },
        {
          name: 'Females',
          data: [-3.8, -3.18, -2.4, -3.7, -3.96, -2.3, -3.1, -4, -4.1, -2.8],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#6236AF', '#F02769'],
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: '80%',
          columnWidth: '30%',
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },

      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        borderColor: '#9aa0ac',
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        theme: 'dark',
        x: {
          formatter: function (val) {
            return val.toString();
          },
        },
        y: {
          formatter: function (val) {
            return val.toString() + '%';
          },
        },
      },
      xaxis: {
        categories: [
          '90+',
          '80-89',
          '70-79',
          '60-69',
          '50-59',
          '40-49',
          '30-39',
          '20-29',
          '10-19',
          '0-9',
        ],
        title: {
          text: 'Percent',
        },
        labels: {
          formatter: function (val) {
            return Math.abs(Math.round(parseInt(val, 10))) + '%';
          },
        },
      },
    };
  }

  private chart3() {
    this.stackBarChart = {
      series: [
        {
          name: 'Data 1',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Data 2',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'Data 3',
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: 'Data 4',
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      chart: {
        type: 'bar',
        height: 310,
        foreColor: '#9aa0ac',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: '#9aa0ac',
      },
      xaxis: {
        type: 'category',
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
        colors: ['#F0457D', '#704DAD', '#FFC107', '#a5a5a5'],
      },
    };
  }
}
