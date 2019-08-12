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
import { CommentService } from '../../services/comment.service';
// Import Models
import { Comment } from '../../domain/habitopia_db/comment';

// START - USED SERVICES
/**
* CommentService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CommentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Comment
 * @class CommentListComponent
 */
@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private commentService: CommentService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.commentService.list();
    }

    /**
     * Select Comment to remove
     *
     * @param {string} id Id of the Comment to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Comment
     */
    deleteItem() {
        this.commentService.remove(this.idSelected);
    }

}
