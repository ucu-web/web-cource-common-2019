export const CheckAction = (storeObj, action, store) =>
  storeObj.fetching || storeObj.fetched || storeObj.data.length
    ? null
    : action(store);
