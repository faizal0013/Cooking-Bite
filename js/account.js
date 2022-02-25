"use strict";

// variable
const log_in = document.getElementById("log-in");
const sign_in = document.getElementById("sign-in");
const sign_up_btn = document.getElementById("sign-up-btn");
const sign_in_btn = document.getElementById("sign-in-btn");
const show_password_log_in = document.getElementById("show-password-log-in");
const show_password_sign_up = document.getElementById("show-password-sign-up");

// lon in and sigin up
const checkFrom = function () {
  const form_section = document.querySelectorAll(".form-section");
  form_section.forEach(function (el) {
    if (el.classList.contains("hide-form")) {
      el.classList.remove("hide-form");
    } else {
      el.classList.add("hide-form");
    }
  });
};

sign_up_btn.addEventListener("click", checkFrom);
sign_in_btn.addEventListener("click", checkFrom);

// log in validations
const checkCheck = function (show_password) {
  show_password.checked = false;
};

checkCheck(show_password_log_in);
checkCheck(show_password_sign_up);

const createErrorMassage = function (currElement, massage) {
  const span = document.createElement("div");
  span.classList.add("massage-error");
  span.innerHTML = "&#128712;".concat(" ").concat(massage);
  currElement.insertAdjacentHTML("afterend", span.outerHTML);
};

const logInFormValidation = function (e) {
  const log_in_user_name = document.getElementById("log-in-user-name");
  const log_in_user_password = document.getElementById("log-in-user-password");

  const massage_error = document.querySelectorAll(".massage-error");
  massage_error.forEach((el) => el.remove());

  if (!log_in_user_name.value) {
    createErrorMassage(log_in_user_name, "Enter a user name");
  } else if (log_in_user_name.value.length < 6) {
    createErrorMassage(
      log_in_user_name,
      "user name must be at least 6 characters"
    );
  }

  if (!log_in_user_password.value) {
    createErrorMassage(log_in_user_password, "Enter a password");
  } else if (log_in_user_password.value.length < 6) {
    createErrorMassage(
      log_in_user_password,
      "password must be at least 6 characters"
    );
  }

  if (document.querySelectorAll(".massage-error").length > 0)
    e.preventDefault();
};

const signInFormValidation = function (e) {
  const sign_in_full_name = document.getElementById("sign-in-full-name");
  const sign_in_user_name = document.getElementById("sign-in-user-name");
  const sign_in_password = document.getElementById("sign-in-user-password");
  const sign_in_re_password = document.getElementById(
    "sign-in-user-re-password"
  );

  const massage_error = document.querySelectorAll(".massage-error");
  massage_error.forEach((el) => el.remove());

  if (!sign_in_full_name.value) {
    createErrorMassage(sign_in_full_name, "Enter a Full name");
  } else if (sign_in_full_name.value.length < 5) {
    createErrorMassage(sign_in_full_name, "Please Enter a full name");
  }

  if (!sign_in_user_name.value) {
    createErrorMassage(sign_in_user_name, "Enter a user name");
  } else if (sign_in_user_name.value.length < 6) {
    createErrorMassage(
      sign_in_user_name,
      "user name must be at least 6 characters"
    );
  }

  if (!sign_in_password.value) {
    createErrorMassage(sign_in_password, "Enter a password");
  } else if (sign_in_password.value.length < 6) {
    createErrorMassage(
      sign_in_password,
      "password name must be at least 6 characters"
    );
  }

  if (!sign_in_re_password.value) {
    createErrorMassage(sign_in_re_password, "Enter a password");
  } else if (sign_in_password.value !== sign_in_re_password.value) {
    createErrorMassage(sign_in_re_password, "password is not same");
  }

  if (document.querySelectorAll(".massage-error").length > 0)
    e.preventDefault();
};

show_password_sign_up.addEventListener("click", function () {
  const user_password = document.getElementById("sign-in-user-password");
  const user_re_password = document.getElementById("sign-in-user-re-password");
  user_password.type = show_password_sign_up.checked ? "text" : "password";
  user_re_password.type = show_password_sign_up.checked ? "text" : "password";
});
sign_in.addEventListener("submit", signInFormValidation);

show_password_log_in.addEventListener("click", function () {
  const user_password = document.getElementById("log-in-user-password");
  user_password.type = show_password_log_in.checked ? "text" : "password";
});
log_in.addEventListener("submit", logInFormValidation);
