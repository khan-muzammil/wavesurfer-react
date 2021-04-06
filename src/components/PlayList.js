import React from "react"

const PlayList = ({ tracks, selectedTrack, setSelectedTrack }) => {
	return (
		<div className="playlist">
			{tracks.map((track, id) =>
				track.url ? (
					<div
						key={id}
						className={
							id === selectedTrack.id
								? "playlist-item selected"
								: "playlist-item"
						}
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
