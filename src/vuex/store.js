import Vuex from 'vuex'
import request from "@/requests/index.js";

let store = new Vuex.Store({
    state: {
        pastes: [],
    },
    mutations: {
        setPastes(state, pastes) {
            state.pastes = pastes;
        },
        addPaste(state, paste) {
            state.pastes.unshift(paste)
            if (state.pastes.length > 10) {
                state.pastes.pop()
            }
        }
    },
    actions: {
        getPastes({ commit }) {
            return request.get('pastes')
                .then(response => {
                    commit('setPastes', response.data.items);
                    return response.data.items;
                })
                .catch(error => {
                    console.log(error);
                    return [];
                });
        },
        createPaste({ commit }, paste) {
            return request.post('pastes', paste)
                .then(response => {
                    commit('addPaste', response.data);
                    return response.data;
                })
                .catch(error => {
                    console.log(error);
                    return {};
                });
        }
    },
    getters: {
        pastes(state) {
            return state.pastes;
        }
    },
});

export default store;
