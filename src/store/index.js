import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            infoLikes:  localStorage.getItem('favorites') ? localStorage.getItem('favorites').split(',') : [],
        }
    },
    mutations: {
        setInfoLikes(state, id) {
            state.infoLikes = id;
        },
    }
});
