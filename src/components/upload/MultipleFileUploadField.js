import { Grid } from "@material-ui/core"
import { useField } from "formik"
import { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { SingleFileUploadWithProgress } from "./SingleFileUploadWithProgress"
import { ErrorHandler } from "./ErrorHandler"

export function MultipleFileUploadField({ name }) {
	// eslint-disable-next-line no-unused-vars
	const [_, __, helpers] = useField(name)
	const [files, setFiles] = useState([])

	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		const mappedAcc = acceptedFiles.map((file) => ({ file, errors: [] }))
		setFiles((curr) => [...curr, ...mappedAcc, ...rejectedFiles])
	}, [])

	useEffect(() => {
		helpers.setValue(files)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [files])

	const onDelete = (file) => {
		setFiles((curr) => curr.filter((fw) => fw.file !== file))
	}
	const onUpload = (file, url) => {
		setFiles((curr) =>
			curr.map((fw) => {
				if (fw.file === file) {
					return { ...fw, url }
				}
				return fw
			})
		)
	}
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: "audio/*",
		maxSize: 3000 * 1024,
	})

	return (
		<>
			<Grid item>
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					{isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<p>Drag 'n' drop some files here, or click to select files</p>
					)}
				</div>
			</Grid>

			{files.map((fileWrapper, id) =>
				fileWrapper.errors.length ? (
					<Grid item>
						<ErrorHandler
							file={fileWrapper.file}
							onDelete={onDelete}
							errors={fileWrapper.errors}
							key={id}
						/>
					</Grid>
				) : (
					<SingleFileUploadWithProgress
						onDelete={onDelete}
						key={id}
						onUpload={onUpload}
						file={fileWrapper.file}
					/>
				)
			)}
		</>
	)
}
