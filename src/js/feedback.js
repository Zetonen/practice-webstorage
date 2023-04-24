import throttle from "lodash.throttle";
import "../css/common.css";
import "../css/feedback.css";
const STORAGE_KEY = "feedback-msg";

const refs = {
  form: document.querySelector(".js-feedback-form"),
  textarea: document.querySelector(".js-feedback-form textarea"),
};

populateMessageOutput();

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput,500));

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(e) {
  const message = e.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function populateMessageOutput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  refs.textarea.value = savedMessage ? savedMessage : "";
}
