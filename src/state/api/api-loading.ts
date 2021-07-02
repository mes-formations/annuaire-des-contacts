export const loadingReducer = (state: any = {}, action: any) => {
  const { type } = action;
  const matches = /(.*)_(request|success|failure)/.exec(type);
  if (!matches) return state;
  const [, requestName, requestStatus] = matches;
  return { ...state, [requestName]: requestStatus === "request" };
};
