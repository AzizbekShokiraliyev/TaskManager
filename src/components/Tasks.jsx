import NewTask from './NewTask'

export default function Tasks({ onAdd, onDelete, tasks }) {
	return (
		<section>
			<h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
			<NewTask onAdd={onAdd} />
			{tasks.length === 0 && (
				<p className='text-stone-800 my-4'>
					This project does not have any tasks yet.
				</p>
			)}
			{tasks.length > 0 && (
				<ul className='bg-stone-200 rounded-md px-2 py-2 mt-3'>
					{tasks.map(task => (
						<li key={task.id} className='flex justify-between my-4'>
							<span className=''>{task.text}</span>
							<button
								className='text-stone-700 hover:text-red-500'
								onClick={() => onDelete(task.id)}
							>
								Close
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	)
}
