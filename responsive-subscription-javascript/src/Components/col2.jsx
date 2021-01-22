import React, { useState } from "react";

function Col2() {
	const [pop, setPop] = useState(false);

	const popUp = () => {
		setPop(!pop);
	};

	const inp = (e) => {
		e.preventDefault();
		let d = document.querySelectorAll("input");
		for (let i = 0; i < d.length; i++) {
			console.log(d[i].value);
		}
		document.querySelector(".form").style.display = "none";
	};

	return (
		<div className="col2">
			<h3>Monthly Subscription</h3>
			<span className="center">
				<span className="dollar">$29</span>{" "}
				<span className="month">per month</span>
			</span>
			<br></br>
			<p>Full access for less than $1 a day</p>
			<br></br>
			<button onClick={popUp} className="btn" title="Sign up now!">
				Sign Up
			</button>
			<div className={pop ? "form" : "hidden"}>
				<form id="form">
					<p>
						<label htmlFor="fname" className="fname">
							Name
						</label>
						<br />
						<input type="text" name="fname" id="fname" placeholder="Name" />
					</p>
					<p>
						<label htmlFor="birthdate" className="birthdate">
							Birthdate
						</label>
						<br />
						<input type="date" defaultValue="yyyy-mm-dd" id="birthdate" />
					</p>
					<p id="address">
						<label htmlFor="address" className="address">
							Street
						</label>
						<br />
						<input type="text" id="street" placeholder="address" />
						<br />
						<label htmlFor="address" className="address">
							City
						</label>
						<br />
						<input type="text" id="city" placeholder="City" />
						<br />
						<label htmlFor="address" className="address">
							Zip
						</label>
						<br />
						<input type="text" id="zip" placeholder="Zip" />
					</p>
					<button onClick={inp} className="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Col2;
