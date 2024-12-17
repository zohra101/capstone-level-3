//Extract the server resoponse and parse it
import { parseQotdResponse } from "../../modules/qotd/parseQotdResponse.js";

export function extractQotdResponse(resolveValue) {
    const promise = resolveValue.text();
    promise.then(parseQotdResponse);
}
