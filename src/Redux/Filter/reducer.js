import { APPLY_FILTER } from "./action";

const initialstate = {
    pricerange: {
        max: "",
        min: "",
    },
    services: [],
    experience: {
        from: '',
        to: ''
    },
    iscertifies: false,
    isvarified: false,
    ishairstyling: false,
    ratinng: ""

}


export function applyfilterreducer(state = initialstate, action) {
    switch (action.type) {
        case APPLY_FILTER:
            return action.payload;

        default:
            return state;
    }

}