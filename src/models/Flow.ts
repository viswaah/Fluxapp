import {Realm} from '@realm/react';

export class Flow extends Realm.Object {
    _id!: Realm.BSON.ObjectId;

    status!: 'PLAYING' | 'PAUSED' | 'COMPLETED';

    type!: 'FLOW' | 'BREAK' | 'LONG_BREAK';

    durations!: number;

    createdAt!: Date;

    completedAt: Date;

    static schema = {
        name: 'Flow',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            status: 'string',
            type: 'string',
            durations: 'int',
            createdAt: 'date',
            completedAt: 'date?'
        }
    };
}
