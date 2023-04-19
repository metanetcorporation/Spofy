runtime.SetScriptData("dateValidationResult", "");

function validateDate(dateString) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/((19|20)\d\d)$/;
    return regex.test(dateString);
}

runtime.SetScriptFunction("validateDateAndUpdateResult", (dateString) => {
    const result = validateDate(dateString) ? "valid" : "invalid";
    runtime.SetScriptData("dateValidationResult", result);
});
