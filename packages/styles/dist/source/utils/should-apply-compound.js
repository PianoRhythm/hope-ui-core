/** Return whether a compound variant should be applied. */
export function shouldApplyCompound(compoundCheck, selections) {
    for (const key of Object.keys(compoundCheck)) {
        if (compoundCheck[key] !== selections[key]) {
            return false;
        }
    }
    return true;
}
