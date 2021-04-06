import React, { useState } from "react"
import Waveform from "./WaveForm"
import PlayList from "./PlayList"
import { Card, CardContent, Grid } from "@material-ui/core"
import { Form, Formik } from "formik"
import { MultipleFileUploadField } from "./upload/MultipleFileUploadField"

const tracks = [
	{
		id: 0,
		file: {
			path: "Moonlight Sonata",
		},
		errors: [],
		url: "https://www.mfiles.co.uk/mp3-downloads/moonlight-movement1.mp3",
	},
	{
		id: 1,
		file: {
			path: "Beethoven - 5th Symphony",
		},
		errors: [],
		url: "https://www.mfiles.co.uk/mp3-downloads/Beethoven-Symphony5-1.mp3",
	},
]

function AudioPlayer() {
	const [selectedTrack, setSelectedTrack] = useState(tracks[0])

	return (
		<Formik initialValues={{ files: [] }} onSubmit={() => {}}>
			{({ values, errors }) => (
				<>
					<Card>
						<CardContent>
							<Waveform url={selectedTrack.url} />
							<PlayList
								tracks={[...tracks, ...values.files]}
								selectedTrack={selectedTrack}
								setSelectedTrack={setSelectedTrack}
							/>
						</CardContent>
					</Card>
					<Card style={{ marginTop: 20 }}>
						<CardContent>
							<Form>
								<Grid container spacing={2} direction="column">
									<MultipleFileUploadField name="files" />
								</Grid>
							</Form>
						</CardContent>
					</Card>
				</>
			)}
		</Formik>
	)
}

export default AudioPlayer
