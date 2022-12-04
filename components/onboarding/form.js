import React from "react";
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

export default function Form() {
	const nameRef = useRef();
	const emailRef = useRef();

	function handleSubmit() {
		// set all the states
	}
	return (
		<FormControl>
			<div>
				<FormLabel>Name</FormLabel>
				<Input type="text" ref={nameRef}></Input>
			</div>
			<div>
				<FormLabel>Email address</FormLabel>
				<Input type="email" ref={emailRef} />
			</div>
			<FormLabel as="legend">
				Have you started planning for retirement?
			</FormLabel>
			<RadioGroup defaultValue="not-sure">
				<HStack spacing="24px">
					<Radio value="yes">Yes</Radio>
					<Radio value="no">No</Radio>
					<Radio value="not-sure">I'm not sure</Radio>
				</HStack>
			</RadioGroup>
			<FormLabel as="legend">Do you have a TIAA account?</FormLabel>
			<RadioGroup defaultValue="not-sure">
				<HStack spacing="24px">
					<Radio value="yes">Yes</Radio>
					<Radio value="no">No</Radio>
					<Radio value="not-sure">I'm not sure</Radio>
				</HStack>
			</RadioGroup>
			<div>
				<button className="primary" onClick={() => handleSubmit()}>
					Submit
				</button>
			</div>
		</FormControl>
	);
}
