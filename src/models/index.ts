import { createRealmContext } from "@realm/react";
import { Flow } from "./Flow";
import { Session } from "./Session";

export const RealmContext = createRealmContext({
  schema: [Session, Flow],
});
