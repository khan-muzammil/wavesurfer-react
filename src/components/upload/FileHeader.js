import { Button, Grid } from "@material-ui/core"

export function FileHeader({ file, onDelete }) {
	return (
		<Grid container justify="space-between" alignItems="center">
			<Grid item>{file.name}</Grid>
			<Grid item>
				<Button onClick={() => onDelete(file)}>Delete</Button>
			</Grid>
		</Grid>
	)
}
