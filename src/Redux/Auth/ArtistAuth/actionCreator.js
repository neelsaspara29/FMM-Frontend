import { ARTIST_LOGIN } from "./action";

export function artistlogin(data) {
    return {
        type: ARTIST_LOGIN,
        payload: data
    }
}