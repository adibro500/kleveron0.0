import { Http, Response } from '@angular/http';
import { Injectable, Component } from '@angular/core';
import { Service } from '../grid-master.service';
import { DatatableComponent } from './datatable.component';
import { ColumnComponent } from './column.component';
import { TableSortDirective } from 'ng-table-sort/table-sort.directive';
import { DroppableDirective } from '@swimlane/ngx-dnd';
@Component({
    selector: 'list',
    templateUrl: `./list.component.html`,
    providers: [ColumnComponent, DatatableComponent, TableSortDirective, DroppableDirective]

})
export class ListComponent {
    emps;
    imps: any[] = [];
    options: any;
    sortToggle: boolean = true;
    constructor(private service: Service) {
        this.emps = this.service.getEmployees();
        //this.imps.push("hello");
        this.options = {
            direction: 'vertical',
            removeOnSpill: false
        }

        // var el = document.getElementById('table');
        // var dragger = tableDragger(el, {
        //     mode: 'column',
        //     dragHandler: '.handle',
        //     onlyBody: true,
        //     animation: 300
        // });
        // dragger.on('drop', function (from, to) {

        // });
    }
    ActiveProjects;

    // predicateBy(i) {
    //     var prop = this.emps[0][Object.keys(this.emps[0])[i]];
    //     console.log("inside prop");
    //     return function (a, b) {
    //         if (a[prop] > b[prop]) {
    //             return 1;
    //         } else if (a[prop] < b[prop]) {
    //             return -1;
    //         }
    //         return 0;
    //     }
    // }



    sorting(fl) {
        alert(this.sortToggle);

        if (fl == 'ap') {

            return this.emps.sort(this.SortByProj);

        }
        else if (fl == 'inv') {

            return this.emps.sort(this.SortByInv);

        }
        else if (fl == 'uninv') {
            return this.emps.sort(this.SortByUnInv);

        }

    }




    SortByProj(x, y) {


        if (this.sortToggle)
            return ((x.ActiveProject == y.ActiveProject) ? 0 : ((x.ActiveProject > y.ActiveProject) ? 1 : -1));
        else
            return ((x.ActiveProject == y.ActiveProject) ? 0 : ((x.ActiveProject < y.ActiveProject) ? 1 : -1));

    }
    SortByInv(x, y) {

        if (this.sortToggle)
            return ((x.Invoiced == y.Invoiced) ? 0 : ((x.Invoiced > y.Invoiced) ? 1 : -1));
        else
            return ((x.Invoiced == y.Invoiced) ? 0 : ((x.Invoiced < y.Invoiced) ? 1 : -1));
    }

    SortByUnInv(x, y) {

        if (this.sortToggle)
            return ((x.UnInvoiced == y.UnInvoiced) ? 0 : ((x.UnInvoiced > y.UnInvoiced) ? 1 : -1));
        else
            return ((x.UnInvoiced == y.UnInvoiced) ? 0 : ((x.UnInvoiced < y.UnInvoiced) ? 1 : -1));

    }

    cloneElement(i) {

        for (var j = 0; j < this.emps.length; j++) {
            // this.emps[j]["ActiveProject"].push(this.emps[j].ActiveProject);
            //obj[Object.keys(obj)[1]]
            //  this.emps[j][Object.keys(this.emps[j])[i]].push(this.emps[j][Object.keys(this.emps[j])[i]]);
            this.emps[j][Object.keys(this.emps[j])[i]].push(this.emps[j][Object.keys(this.emps[j])[i]]);
        }

    }

}