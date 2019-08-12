/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d41c8dfc0e2910e77977c56
*
* You will get 10% discount for each one of your friends
* 
*/
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { InterpretationService } from '../../services/interpretation.service';
// Import Models
import { Interpretation } from '../../domain/habitopia_db/interpretation';

// START - USED SERVICES
/**
* InterpretationService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* InterpretationService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Interpretation
 * @class InterpretationListComponent
 */
@Component({
    selector: 'app-interpretation-list',
    templateUrl: './interpretation-list.component.html',
    styleUrls: ['./interpretation-list.component.css']
})
export class InterpretationListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private interpretationService: InterpretationService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.interpretationService.list();
    }

    /**
     * Select Interpretation to remove
     *
     * @param {string} id Id of the Interpretation to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Interpretation
     */
    deleteItem() {
        this.interpretationService.remove(this.idSelected);
    }

}
