import React from "react";
import CurrentAvatar from "../../components/avatar";
import CurrentTask from "../../components/tasks/currentTask";
import Progress from "../../components/tasks/progress";

export default function TasksPage() {
	return (
		<main id="task-page">
			<h1>My Tasks</h1>
			<div className="content">
				<div className="side">
					<CurrentAvatar size={200} />
				</div>
				<div className="tasks">
					<Progress />
					<CurrentTask />
					<h3>Tasks</h3>
					<p>tasks</p>
				</div>
			</div>
		</main>
	);
}
