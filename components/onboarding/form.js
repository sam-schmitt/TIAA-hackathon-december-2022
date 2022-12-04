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
	const {
		hasTIAA,
		setHasTIAA,
		name,
		setName,
		email,
		setEmail,
		startedPlanning,
		setStartedPlanning,
		setLoggedIn,
	} = useContext(Context);

	return (
		<div className="form">
			<div class="header">
				<h3>Create An Account</h3>
				<h5>Already have an account?</h5>
				<button
					class="primary"
					onClick={() => {
						setName("Johnny Doe");
						setEmail("jdoe@email.com");
						setLoggedIn(true);
						setHasTIAA("yes");
						setStartedPlanning("no");
					}}>
					Login with your TIAA Account
				</button>
			</div>
			<FormControl>
				<div>
					<FormLabel>Full Name</FormLabel>
					<Input
						type="text"
						ref={nameRef}
						onChange={(e) => setName(e.target.value)}
						placeholder="John Doe"
						value={name}
					/>
				</div>
				<div>
					<FormLabel>Email Address</FormLabel>
					<Input
						type="email"
						ref={emailRef}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="example@email.com"
						value={email}
					/>
				</div>
				<FormLabel as="legend">
					Have you started planning for retirement?
				</FormLabel>
				<RadioGroup
					defaultValue="not-sure"
					value={startedPlanning}
					onChange={setStartedPlanning}>
					<HStack spacing="24px">
						<Radio value="yes">Yes</Radio>
						<Radio value="no">No</Radio>
						<Radio value="not-sure">I'm not sure</Radio>
					</HStack>
				</RadioGroup>
				<FormLabel as="legend">Do you have a TIAA account?</FormLabel>
				<RadioGroup
					defaultValue="not-sure"
					value={hasTIAA}
					onChange={setHasTIAA}>
					<HStack spacing="24px">
						<Radio value="yes">Yes</Radio>
						<Radio value="no">No</Radio>
						<Radio value="not-sure">I'm not sure</Radio>
					</HStack>
				</RadioGroup>
			</FormControl>
		</div>
	);
}
