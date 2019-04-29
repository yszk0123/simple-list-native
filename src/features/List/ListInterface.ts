import { createModule } from 'typeless';

export const [useModule, ListActions, getListState] = createModule(
  Symbol('List'),
)
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
