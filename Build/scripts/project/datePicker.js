function datePicker() {
  var picker = document.createElement('input');
  picker.type = 'date';
  picker.onchange = function() {
    var pickedDate = picker.value;
    // Replace 'YourFunctionName' with the Construct 3 function you want to call with the picked date.
    runtime.callFunction('YourFunctionName', [pickedDate]);
  };
  picker.click();
};