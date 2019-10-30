function SET_DATES (state, dates) {
  state.dates = dates
}

function SET_DATE (state, date) {
  state.date = date
}

function ADD_DATE(state, date) {
  Object.assign(state.dates, date);
}

function RESET_DATES(state, id) {
  // Vue.delete(state.dates, id)
  state.dates = dates
}

export {
  SET_DATES,
  SET_DATE,
  ADD_DATE,
  RESET_DATES
};