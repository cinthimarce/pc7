import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    departments:[],
    employees:[],
  },
  getters: {
  },
  mutations: {
    SET_DEPARTMENTS(state,departments){
      state.departments = departments
    },
    SET_EMPLOYEES(state,employees){
      state.employees = employees
    },
  },
  actions: {
    async fetchDepartments({commit}){
      try{
        let response = await fetch('/department.json')
        let departments = await response.json()
        console.log(departments);
        commit('SET_DEPARTMENTS',departments)
      }
      catch(error){
        console.log(error);
      }
    },
    async fetchEmployees({commit}){
      try{
        let response = await fetch('/employee.json')
        let employees = await response.json()
        console.log(employees);
        commit('SET_EMPLOYEES',employees)
      }
      catch(error){
        console.log(error);
      }
    }
  },
  modules: {
  }
})
