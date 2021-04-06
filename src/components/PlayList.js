import React from "react"

const PlayList = ({ tracks, selectedTrack, setSelectedTrack }) => {
	console.log(tracks)
	return (
		<div className="playlist">
			{tracks.map((track, id) =>
				track.url ? (
					<div
						key={id}
						className="playlist-item"
						onClick={() => setSelectedTrack(track)}
					>
						{track.file.path}
					</div>
				) : null
			)}
		</div>
	)
}

export default PlayList
