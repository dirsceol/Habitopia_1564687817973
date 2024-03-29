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
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE log-entryBaseService PLEASE EDIT ../log-entry.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { LogEntry } from '../../domain/habitopia_db/log-entry';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../LogEntry.service.ts
 */

/*
 * SCHEMA DB LogEntry
 *
	{
		date: {
			type: 'Date',
			required : true
		},
		success: {
			type: 'Boolean',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		comment: {
			type: Schema.ObjectId,
			ref : "LogEntry"
		},
		evaluation: {
			type: Schema.ObjectId,
			ref : "LogEntry"
		},
		habit: {
			type: Schema.ObjectId,
			ref : "LogEntry"
		},
		interpretation: {
			type: Schema.ObjectId,
			ref : "LogEntry"
		},
		journalEntry: {
			type: Schema.ObjectId,
			ref : "LogEntry"
		},
	}
 *
 */
@Injectable()
export class LogEntryBaseService {

    private logentryCollection: AngularFirestoreCollection<LogEntry>;
    constructor(
        private afs: AngularFirestore,
        private fns: AngularFireFunctions
    ) {
        this.logentryCollection = afs.collection<LogEntry>('logentry');
    }


    // CRUD METHODS

    /**
    * LogEntryService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: LogEntry): Promise<DocumentReference> {
        return this.logentryCollection.add(item);
    }

    /**
    * LogEntryService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string) {
        const itemDoc: AngularFirestoreDocument<any> = this.logentryCollection.doc(id);
        itemDoc.delete();
    }

    /**
    * LogEntryService.findBycomment
    *   @description CRUD ACTION findBycomment
    *   @param Objectid key Id della risorsa comment da cercare
    *
    */
    findByComment(id: string): Observable<any[]> {
        return this.afs.collection('logentry', ref => ref.where('comment', '==', id)).snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as LogEntry;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * LogEntryService.findByevaluation
    *   @description CRUD ACTION findByevaluation
    *   @param Objectid key Id della risorsa evaluation da cercare
    *
    */
    findByEvaluation(id: string): Observable<any[]> {
        return this.afs.collection('logentry', ref => ref.where('evaluation', '==', id)).snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as LogEntry;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * LogEntryService.findByhabit
    *   @description CRUD ACTION findByhabit
    *   @param Objectid key Id della risorsa habit da cercare
    *
    */
    findByHabit(id: string): Observable<any[]> {
        return this.afs.collection('logentry', ref => ref.where('habit', '==', id)).snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as LogEntry;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * LogEntryService.findByinterpretation
    *   @description CRUD ACTION findByinterpretation
    *   @param Objectid key Id della risorsa interpretation da cercare
    *
    */
    findByInterpretation(id: string): Observable<any[]> {
        return this.afs.collection('logentry', ref => ref.where('interpretation', '==', id)).snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as LogEntry;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * LogEntryService.findByjournalEntry
    *   @description CRUD ACTION findByjournalEntry
    *   @param Objectid key Id della risorsa journalEntry da cercare
    *
    */
    findByJournalEntry(id: string): Observable<any[]> {
        return this.afs.collection('logentry', ref => ref.where('journalEntry', '==', id)).snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as LogEntry;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * LogEntryService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): AngularFirestoreDocument<LogEntry> {
        return this.afs.doc<LogEntry>('logentry/' + id);
    }

    /**
    * LogEntryService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<LogEntry[]> {
        return this.afs.collection('logentry').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as LogEntry;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * LogEntryService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(itemDoc: AngularFirestoreDocument<LogEntry>, item: LogEntry): Promise<void> {
        return itemDoc.update(item);
    }


    // Custom APIs

}
