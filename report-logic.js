module.exports = function(msg, RED, node) {
    // const printStringArray = [];
    const global = {
        get: (key) => {
            if (key === "prod.enabledDevice") return "ANALOGUE";
            if (key === "prod.reportFormat") return "SBV+Rej";
            return undefined;
        }
    };
    /* Full report logic from user’s function goes here */
};
