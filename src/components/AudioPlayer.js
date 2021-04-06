import React, { useState } from "react"
import Waveform from "./WaveForm"
import PlayList from "./PlayList"
import { Card, CardContent, Grid } from "@material-ui/core"
import { Form, Formik } from "formik"
import { MultipleFileUploadField } from "./upload/MultipleFileUploadField"

const tracks = [
	{
		file: {
			path: "Airplane Landing",
		},
		errors: [],
		url:
			"https://res.cloudinary.com/deo2tr2pt/video/upload/v1617699536/airplane-landing_daniel_simion_nujswo.mp3",
	},
	{
		file: {
			path: "Service Bell daniel Simion",
		},
		errors: [],
		url:
			"https://res.cloudinary.com/deo2tr2pt/video/upload/v1617699535/service-bell_daniel_simion_ckkbii.mp3",
	},
	/* 	{
		file: {
			path: "Heavy Rain",
		},
		errors: [],
		url:
			"https://res.cloudinary.com/deo2tr2pt/video/upload/v1617699547/heavy-rain-daniel_simon_kju8jb.mp3",
	}, */
	{
		file: {
			path: "Labrador Barking",
		},
		errors: [],
		url:
			"https://res.cloudinary.com/deo2tr2pt/video/upload/v1617699537/labrador-barking-daniel_simon_miyfud.mp3",
	},
	/* {
		file: {
			path: "Dreamy Summer Music",
		},
		errors: [],
		url:
			"https://res.cloudinary.com/deo2tr2pt/video/upload/v1617699546/dreamy-summer-music-130343284_prev_jvzuy1.m4a",
	}, */
]

function AudioPlayer() {
	const [selectedTrack, setSelectedTrack] = useState(tracks[0])

	return (
		<Formik initialValues={{ files: [] }} onSubmit={() => {}}>
			{({ values, errors }) => (
				<>
					<Card>
						<CardContent>
							<Waveform
								tracks={[...tracks, ...values.files]}
								url={selectedTrack?.url}
								selectedTrack={selectedTrack}
								setSelectedTrack={setSelectedTrack}
							/>

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
