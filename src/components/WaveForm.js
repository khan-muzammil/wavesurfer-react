import React, { useEffect, useRef, useState } from "react"
import WaveSurfer from "wavesurfer.js"

export default function Waveform({
	url,
	selectedTrack,
	setSelectedTrack,
	tracks,
}) {
	const waveformRef = useRef(null)
	const wavesurfer = useRef(null)
	const [playing, setPlay] = useState(false)

	useEffect(() => {
		setPlay(false)

		wavesurfer.current = WaveSurfer.create({
			container: waveformRef.current,
			waveColor: "blue",
			progressColor: "OrangeRed",
			cursorColor: "OrangeRed",
			barWidth: 3,
			barRadius: 3,
			responsive: true,
			height: 150,
			// If true, normalize by the maximum peak instead of 1.0.
			normalize: true,
			// Use the PeakCache to improve rendering speed of large waveforms.
			partialRender: true,
		})
		if (url) {
			wavesurfer.current.load(url)
		}

		wavesurfer.current.on("finish", function () {
			setSelectedTrack(tracks[tracks.indexOf(selectedTrack) + 1])
			// console.log("current index ", tracks.indexOf(selectedTrack))
		})
		wavesurfer.current.on("ready", function () {
			setPlay(true)
			wavesurfer.current.play()
		})

		return () => wavesurfer.current.destroy()

		// eslint-disable-next-line
	}, [url])

	const handlePlayPause = () => {
		setPlay(!playing)
		wavesurfer.current.playPause()
	}

	return (
		<div>
			<div id="waveform" ref={waveformRef} />
			<div className="controls">
				<button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button>
			</div>
		</div>
	)
}
