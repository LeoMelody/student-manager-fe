
import qs from "qs";
import { PathLike } from "fs";

export default {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL: "/api",
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
}