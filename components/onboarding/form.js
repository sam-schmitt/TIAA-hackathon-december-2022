import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Radio,
	RadioGroup,
	HStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Context } from "../../providers/Provider";

export default function Form() {
	const nameRef = useRef();
	const emailRef = useRef();
	const router = useRouter();
	const {
		hasTIAA,
		setHasTIAA,
		name,
		setName,
		email,
		setEmail,
		startedPlanning,
		setStartedPlanning,
	} = useContext(Context);

	const [view, setView] = useState("editing");

	function handleSubmit() {
		// set all the states
	}
	if (view === "editing") {
		return (
			<div className="form">
				<FormControl>
					<div>
						<FormLabel>Full Name</FormLabel>
						<Input
							type="text"
							ref={nameRef}
							onChange={(e) => setName(e.target.value)}
							placeholder="John Doe"
						/>
					</div>
					<div>
						<FormLabel>Email Address</FormLabel>
						<Input
							type="email"
							ref={emailRef}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="example@email.com"
						/>
					</div>
					<FormLabel as="legend">
						Have you started planning for retirement?
					</FormLabel>
					<RadioGroup defaultValue="not-sure" onChange={setStartedPlanning}>
						<HStack spacing="24px">
							<Radio value="yes">Yes</Radio>
							<Radio value="no">No</Radio>
							<Radio value="not-sure">I'm not sure</Radio>
						</HStack>
					</RadioGroup>
					<FormLabel as="legend">Do you have a TIAA account?</FormLabel>
					<RadioGroup defaultValue="not-sure" onChange={setHasTIAA}>
						<HStack spacing="24px">
							<Radio value="yes">Yes</Radio>
							<Radio value="no">No</Radio>
							<Radio value="not-sure">I'm not sure</Radio>
						</HStack>
					</RadioGroup>
					<div>
						<button className="primary" onClick={() => setView("previewing")}>
							Submit
						</button>
					</div>
				</FormControl>
			</div>
		);
	} else if (view === "previewing") {
		return (
			<div className="form">
				<p>Name: {name}</p>
				<p>Email: {email}</p>
				<p>Started Planning for Retirement: {startedPlanning}</p>
				<p>Has TIAA Account: {hasTIAA}</p>
				<div>
					<button className="primary" onClick={() => setView("editing")}>
						Make Changes
					</button>
					<button
						className="primary"
						onClick={() => router.push("/onboarding/avatar")}>
						Confirm
					</button>
				</div>
			</div>
		);
	}
}
