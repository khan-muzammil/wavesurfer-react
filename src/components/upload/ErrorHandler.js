import { LinearProgress } from "@material-ui/core"
import { FileHeader } from "./FileHeader"

export function ErrorHandler({ file, onDelete, errors }) {
	return (
		<>
			<FileHeader file={file} onDelete={onDelete} />
			<LinearProgress color="secondary" variant="determinate" value={100} />
			{errors.map((error, id) => (
				<span key={id}>{error.message}</span>
			))}
		</>
	)
}
