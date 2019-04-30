import { createModule } from 'typeless';

const LIST = Symbol('List');

export const [useModule, ListActions, getListState] = createModule(LIST)
  .withActions({
    increment: null,
    decrement: null,
    countDone: null,
  })
  .withState<ListState>();

export interface ListState {
  count: number;
  loading: boolean;
}
