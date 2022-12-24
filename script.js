"use strict";

const mail = document.querySelector(".mail");
const btn = document.querySelector(".notify");
const errormb = document.querySelector(".error-mb");
const error = document.querySelector(".error");

btn.addEventListener("click", () => {
	const mailval = document.querySelector("input").value;
	if (validateEmail(mailval)) {
		console.log("true mail");
	} else {
		mail.classList.add("active-false");
		errormb.classList.remove("hide-error");
		error.classList.remove("hide-error");
	}
});
// const mailval = document.querySelector("input").value;
// console.log(mailval);
const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};
