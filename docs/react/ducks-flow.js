/*
  Since we had a few problems with using Flow
  in ducks so I've created the recommendation for that.
*/

type TPeriod = {
  value: number,
  label: string,
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

const renamePeriodSuccess = (id: number, name: string) => ({
  type: RENAME_PERIOD_SUCCESS,
  payload: {
    id,
    name,
  },
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
    | $Call<typeof renamePeriodSuccess, number, string>
    | $Call<typeof clearStore>,
): TPeriod[] => {
  switch (action.type) {
    case GET_PERIODS_SUCCESS:
      return action.payload;

    case RENAME_PERIOD_SUCCESS: {
      const { id, name } = action.payload;

      return state.map(
        el => (el.value === id ? { ...el, label: name } : { ...el }),
      );
    }

    case CLEAR_STORE:
      return [];

    default:
      return state;
  }
};
