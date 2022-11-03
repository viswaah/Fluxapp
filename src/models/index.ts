import {createRealmContext} from '@realm/react';
import {Task} from './Task';

export const RealmContext = createRealmContext({
  schema: [Task],
});
