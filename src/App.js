import "./App.css"
import {
	AppBar,
	Box,
	Container,
	CssBaseline,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core"

const useStyles = makeStyles({
	title: {
		flexGrow: 1,
	},
})

function App() {
	const classes = useStyles()
	return (
		<>
			<AppBar position="fixed">
				<Toolbar variant="dense">
					<Typography variant="h6" className={classes.title}>
						Deepsync-Wavesurfer
					</Typography>
				</Toolbar>
			</AppBar>

			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<Container>
				<Box marginTop={10}>
					<h1>Hello World</h1>
				</Box>
			</Container>
		</>
	)
}

export default App
