/*
  Since we had a few problems with using Flow in ducks
  so I've created the example for that.
*/

type TPeriod = {
  id: number,
  name: string,
};

/*
  Don't use template literals for action constants
  since Flow will not work as expected for that reducer
  e.g. `${prefix}/GET_PERIODS_SUCCESS`.
*/
const GET_PERIODS_SUCCESS = 'accounts/GET_PERIODS_SUCCESS';
const RENAME_PERIOD_SUCCESS = 'accounts/RENAME_PERIOD_SUCCESS';
const CLEAR_STORE = 'accounts/CLEAR_STORE';

const getPeriodsSuccess = (data: TPeriod[]) => ({
  type: GET_PERIODS_SUCCESS,
  payload: data,
});

const renamePeriodSuccess = (data: TPeriod) => ({
  type: RENAME_PERIOD_SUCCESS,
  payload: data,
});

const clearStore = () => ({
  type: CLEAR_STORE,
});

/*
  Use separate reducer function for each property of state.
  It gives you more readability and ability to create
  utils for common cases.
*/
const periodsReducer = (
  state: TPeriod[] = [],
  action:
    | $Call<typeof getPeriodsSuccess, TPeriod[]>
    | $Call<typeof renamePeriodSuccess, TPeriod>
    | $Call<typeof clearStore>,
): TPeriod[] => {
  switch (action.type) {
    case GET_PERIODS_SUCCESS:
      return action.payload;

    case RENAME_PERIOD_SUCCESS: {
      const { id, name } = action.payload;

      return state.map(el => (el.id === id ? { ...el, name } : { ...el }));
    }

    case CLEAR_STORE:
      return [];

    default:
      return state;
  }
};
