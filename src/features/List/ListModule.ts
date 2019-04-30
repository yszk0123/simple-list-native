import * as Rx from 'typeless/rx';
import { ListActions, ListState, useModule } from './ListInterface';

const initialState: ListState = {
  loading: false,
  count: 0,
};

useModule
  .epic()
  .on(ListActions.increment, () =>
    Rx.of(ListActions.countDone()).pipe(Rx.delay(500)),
  );

useModule
  .reducer(initialState)
  .on(ListActions.increment, state => {
    state.loading = true;
    state.count += 1;
  })
  .on(ListActions.decrement, state => {
    state.loading = true;
    state.count -= 1;
  })
  .on(ListActions.countDone, state => {
    state.loading = false;
  });
