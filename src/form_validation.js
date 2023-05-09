const validating = (() => {
  const check_Validity_Text = function (field) {
    if (field.value.length >= 5 && field.value.length <= 20) {
      return true;
    }
    return false;
  };
  const check_Validity_Num = function (field) {
    if (field.value < 1000 && field.value > 0) {
      return true;
    }
    return false;
  };
  const error_message = (field, num) => {
    if (num) {
      if (!check_Validity_Num(field)) {
        return `${field.id} should be in range 5-999`;
      }
    } else if (!check_Validity_Text(field)) {
      return `${field.id} should be 5-18 characters long`;
    }
    return "";
  };
  const display_error = (field, num) => {
    const error = error_message(field, num);
    let div_error = field.parentElement.querySelector("div");
    if (error) {
      if (!div_error) {
        div_error = document.createElement("div");
      }
      div_error.className = "error";
      div_error.textContent = error;
      field.parentElement.append(div_error);
      return true;
    } else {
      div_error.textContent = "";
      div_error.className = "";
      return false;
    }
  };
  return { display_error, check_Validity_Num, check_Validity_Text };
})();

export { validating };
