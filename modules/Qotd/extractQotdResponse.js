import { Qotd } from "./Qotd";

//Extract the server resoponse and parse it
export function extractQotdResponse(resolveValue) {
    const promise = resolveValue.text();
    promise.then();
}
