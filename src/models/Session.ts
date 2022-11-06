import { Realm } from "@realm/react";

export class Session extends Realm.Object {
  _id!: Realm.BSON.ObjectId;

  static schema = {
    name: "Session",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      flows:'Flow[]'
    },
  };
}
