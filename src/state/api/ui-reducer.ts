export const loadingReducer = (
  state: any = {},
  action: { type: string }
): any => {
  const { type } = action;
  const matches = /(.*)_(request|success|failure)/.exec(type);
  if (!matches) {
    return state;
  }

  const [, requestName, requestStatus] = matches;
  const newState = { ...state, [requestName]: requestStatus === "request" };
  return newState;
};
