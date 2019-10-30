import axios from 'axios';

function getDates({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('http://test.unit.homestretch.ch/')  
      .then((response) => {
        commit('SET_DATES', response.data);
      })
      .catch(error => console.log(error));
  });
}

function addDates({ commit }, data) {
  return new Promise((resolve, reject) => {
    axios.post('http://test.unit.homestretch.ch/save', data)
      .then((response) => {
        commit('SET_DATES', response.data);
        console.log(response)
        resolve();
      })
      .catch(error => {
        // commit('errors/setErrors', error.response.data, { root: true });
        console.log(error)
      });
  });
}


export {
  getDates,
  addDates
};
