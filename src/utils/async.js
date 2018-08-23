export const AsyncFlowStatus = {
    PENDING: "pending",
    SUCCESS: "success",
    FORBIDDEN: "forbidden",
    FAILED: "failed"
}

export const AsyncUtils = {
    throttle: (func, wait, ctx, immediate = true) => {
        let timeoutRefId;
        let args;
        let context;
        let timestamp;
        let result;
        const later = () => {
            const last = Date.now() - timestamp;
            if (last < wait && last >= 0) {
                timeoutRefId = setTimeout(later, wait - last);
            } else {
                timeoutRefId = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeoutRefId) context = args = null;
                }
            }
        };
        return () => {
            context = ctx || this;
            args = arguments;
            timestamp = Date.now();
            const callNow = immediate && !timeoutRefId;
            // TODO: Investigate why the two blocks below are not mutually exclusive
            if (!timeoutRefId) timeoutRefId = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
    }
};
