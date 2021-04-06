import { Grid, LinearProgress } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import { FileHeader } from "./FileHeader"

export function SingleFileUploadWithProgress({ file, onDelete, onUpload }) {
	const [progress, setProgress] = useState(0)
	useEffect(() => {
		async function upload() {
			const url = await uploadFile(file, setProgress)
			console.log("file ", file)
			onUpload(file, url)
		}

		upload()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return progress > 99 ? null : (
		<Grid item>
			<FileHeader file={file} onDelete={onDelete} />
			<LinearProgress variant="determinate" value={progress} />
		</Grid>
	)
}

async function uploadFile(file, onProgress = (percentage) => {}) {
	const data = new FormData()
	data.append("file", file)
	data.append("upload_preset", "gakbg3vt")

	const onUploadProgress = (event) => {
		if (event.lengthComputable) {
			const percentCompleted = Math.round((event.loaded * 100) / event.total)
			console.log("onUploadProgress", percentCompleted)
			onProgress(Math.round(percentCompleted))
		}
	}
	try {
		const result = await axios.put(process.env.REACT_APP_CLOUDINARY_URL, data, {
			onUploadProgress,
		})

		console.log("result is", result) // result is server's response
		console.log(result.data.secure_url)
		return result.data.secure_url
	} catch (error) {
		console.error(error)
	}
}
