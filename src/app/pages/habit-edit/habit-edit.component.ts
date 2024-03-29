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
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { HabitService } from '../../services/habit.service';
import { LogEntryService } from '../../services/log-entry.service';
import { CueService } from '../../services/cue.service';
import { MemberService } from '../../services/member.service';
import { ActionService } from '../../services/action.service';
import { RewardService } from '../../services/reward.service';

import { Habit } from '../../domain/habitopia_db/habit';
import { Action } from '../../domain/habitopia_db/action';
import { LogEntry } from '../../domain/habitopia_db/log-entry';
import { Member } from '../../domain/habitopia_db/member';
import { Cue } from '../../domain/habitopia_db/cue';
import { Reward } from '../../domain/habitopia_db/reward';

// START - USED SERVICES
/**
* HabitService.create
*	@description CRUD ACTION create
*
* LogEntryService.findByhabit
*	@description CRUD ACTION findByhabit
*	@param Objectid key Id della risorsa habit da cercare
*
* CueService.findBypreceedingHabit
*	@description CRUD ACTION findBypreceedingHabit
*	@param Objectid key Id della risorsa preceedingHabit da cercare
*
* HabitService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* MemberService.list
*	@description CRUD ACTION list
*
* ActionService.list
*	@description CRUD ACTION list
*
* RewardService.list
*	@description CRUD ACTION list
*
* CueService.list
*	@description CRUD ACTION list
*
* HabitService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Habit
 */
@Component({
    selector: 'app-habit-edit',
    templateUrl: 'habit-edit.component.html',
    styleUrls: ['habit-edit.component.css']
})
export class HabitEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Habit>;
    isNew: Boolean = true;
    formValid: Boolean;

    listAction: Action[];
    listCue: Cue[];
    listHabit: Habit[];
    listMember: Member[];
    listPreceedingHabit: Habit[];
    listRewards: Reward[];

    externalLogEntry: LogEntry[];
    externalCue: Cue[];

    constructor(
        private habitService: HabitService,
        private logentryService: LogEntryService,
        private cueService: CueService,
        private memberService: MemberService,
        private actionService: ActionService,
        private rewardService: RewardService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
        this.externalLogEntry = [];
        this.externalCue = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.habitService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.logentryService.findByHabit(id).subscribe(list => this.externalLogEntry = list);
                this.cueService.findByPreceedingHabit(id).subscribe(list => this.externalCue = list);
            }
            // Get relations
            this.actionService.list().subscribe(list => this.listAction = list);
            this.cueService.list().subscribe(list => this.listCue = list);
            this.memberService.list().subscribe(list => this.listMember = list);
            this.rewardService.list().subscribe(list => this.listRewards = list);
        });
    }


    /**
     * Check if an Reward is in  rewards
     *
     * @param {string} id Id of Reward to search
     * @returns {boolean} True if it is found
     */
    containReward(id: string): boolean {
        if (!this.item.rewards) return false;
        return this.item.rewards.indexOf(id) !== -1;
    }

    /**
     * Add Reward from Habit
     *
     * @param {string} id Id of Reward to add in this.item.rewards array
     */
    addReward(id: string) {
        if (!this.item.rewards)
            this.item.rewards = [];
        this.item.rewards.push(id);
    }

    /**
     * Remove an Reward from a Habit
     *
     * @param {number} index Index of Reward in this.item.rewards array
     */
    removeReward(index: number) {
        this.item.rewards.splice(index, 1);
    }

    /**
     * Save Habit
     *
     * @param {boolean} formValid Form validity check
     * @param Habit item Habit to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.habitService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.habitService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
