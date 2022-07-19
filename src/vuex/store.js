import Vuex from 'vuex'
import Request from "@/requests/index.js";

let store = new Vuex.Store({
    state: {
        paste: {},
        pastes: [],
        lastCreatedPaste: null,
    },
    mutations: {
        setPastes(state, pastes) {
            state.pastes = pastes;
        },
        addPaste(state, paste) {
            state.lastCreatedPaste = paste;
        },
        setPaste(state, paste) {
            state.paste = paste;
        }
    },
    actions: {
        getPastes({ commit }) {
            return Request.get('pastes')
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
            if (paste.title.length < 1 || paste.body.length < 1) {
                return;
            }
            return Request.post('pastes', paste)
                .then(response => {
                    commit('addPaste', response.data);
                    return response.data;
                })
                .catch(error => {
                    console.log(error);
                    return {};
                });
        },
        getPaste({commit}, pasteHash) {
            return Request.get(`pastes/${pasteHash}`)
                .then(response => {
                    commit('setPaste', response.data);
                    return response.data;
                })
                .catch(error => {
                    console.log(error);
                    return [];
                });
        }
    },
    getters: {
        pastes(state) {
            return state.pastes;
        },
        lastCreatedPaste(state) {
            return state.lastCreatedPaste;
        },
        paste(state) {
            return state.paste;
        },
    },
});

export default store;
