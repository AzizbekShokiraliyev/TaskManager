import { useState } from 'react'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import ProjectSidebar from './components/ProjectSidebar'
import SelectedProject from './components/SelectedProject'

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
	})

	function handleSelectProject(id) {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: id,
			}
		})
	}

	function handleStartAddProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			}
		})
	}

	function handleCancle() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
			}
		})
	}

	function handleDelate() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					project => project.id !== prevState.selectedProjectId
				),
			}
		})
	}

	function handleAddProject(projectData) {
		const projectId = Math.random()
		const newProject = {
			...projectData,
			id: projectId,
		}

		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			}
		})
	}

	const selectedProject = projectState.projects.find(
		project => project.id === projectState.selectedProjectId
	)

	let content = (
		<SelectedProject project={selectedProject} onDelate={handleDelate} />
	)

	if (projectState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} onCancel={handleCancle} />
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	}

	return (
		<main className='h-screen my-8 flex gap-8'>
			<ProjectSidebar
				onStartAddProject={handleStartAddProject}
				projects={projectState.projects}
				onSelectProject={handleSelectProject}
			/>
			{content}
		</main>
	)
}

export default App
