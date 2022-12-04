import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import tasks from "../../avatar-state/tasks";
import { Context } from "../../providers/Provider";
import roomTypes from "../../avatar-state/room";
import Image from "next/image";
import { Checkbox } from "@chakra-ui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
export default function QuickActions() {
	const router = useRouter();
	const { roomType, setRoomType } = useContext(Context);
	const [completed, setCompleted] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();
	function incRoom(index) {
		setCompleted([...completed, ...[index]]);
		if (roomType !== roomTypes.length - 1) {
			setRoomType(roomType + 1);
		} else {
		}
	}
	const myLoader = ({ src, width, quality }) => {
		return src;
	};
	return (
		<div className="quick-actions">
			<div class="header">
				<h4>It's not too late to help your future self!</h4>
				<h4>Learn How</h4>
				<KeyboardArrowDownIcon fontSize="large" />
			</div>
			{tasks.map((item, index) => {
				return (
					<>
						<div className="action-card card">
							<div class="img-wrapper">
								<div>
									<Image
										loader={myLoader}
										src={item.image}
										width={270}
										height={270}
										quality={70}
									/>
								</div>
								<div className="content">
									<h4>{item.title}</h4>
									<p>{item.description}</p>
									<div class="stats">
										{item.rewards.map(function (item, idx) {
											return (
												<div className="reward">
													{item.icon}
													<h6>{item.label}</h6>
												</div>
											);
										})}
									</div>
								</div>
							</div>
							{!completed.includes(index) ? (
								<button
									class="primary"
									onClick={() => {
										onOpen();
										incRoom(index);
									}}
									disabled={completed.includes(index)}>
									Let's Go
								</button>
							) : (
								<button class="secondary" disabled={true}>
									<CheckIcon />
									Completed
								</button>
							)}
						</div>
					</>
				);
			})}
			<Modal isOpen={isOpen} onClose={onClose} size="xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>TIAA Module</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<h4>
							By Linking their TIAA account, participants will be brought to the
							exact location where they need to complete their most urgent tasks
						</h4>
					</ModalBody>

					<ModalFooter>
						<button
							className="primary mr-auto"
							onClick={() => {
								onClose();
							}}>
							Close
						</button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
}
