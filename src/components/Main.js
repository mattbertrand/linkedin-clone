import styled from "styled-components";

const Main = (props) => {
	return (
		<Container>
			<ShareBox>Share
				<div>
					<img src="images/user.svg" alt="user" />
					<button>Start a post</button>
				</div>
				<div>
					<button>
						<img src="/images/photo-icon.svg" alt="photo-icon" />
						<span>Photo</span>
					</button>

					<button>
						<img src="/images/video-icon.svg" alt="video-icon" />
						<span>Video</span>
					</button>

					<button>
						<img src="/images/event-icon.svg" alt="event-icon" />
						<span>Event</span>
					</button>

					<button>
						<img src="/images/write-icon.svg" alt="write-icon-icon" />
						<span>Write Article</span>
					</button>
				</div>
			</ShareBox>
			<div>
				<Article>
					<SharedActor>
						<a>
							<img src="/images/user.svg" alt="user" />
							<div>
								<span>Title</span>
								<span>Info</span>
								<span>Date</span>
							</div>
						</a>
						<button>
							<img src="/images/ellipsis-icon.svg" alt="ellipsis-icon" />
						</button>
					</SharedActor>
				</Article>
			</div>
		</Container>
	)
};

const Container = styled.div`
	grid-area: main;
`;

const CommentCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommentCard)`
	display: flex;
	flex-direction: column;
	color: #958b7b;
	margin: 0 0 8px;
	background: white;
	div {
		button {
			outline: none;
			color: rgba(0, 0, 0, 0.6);
			font-size: 14px;
			line-height: 1.5;
			min-height: 48px;
			background: transparent;
			border: none;
			display: flex;
			align-items: center;
			font-weight: 600;
		}
		&:first-child {
			display: flex;
			align-items: center;
			padding: 8px 16px 0px 16px;
			img {
				width: 48px;
				border-radius: 50%;
				margin-right: 8px;
			}
			button {
				margin: 4px 0;
				flex-grow: 1;
				padding-left: 16px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				border-radius: 35px;
				background-color: white;
				text-align: left;
			}
		}
		&:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 4px;

			button {
				img {
					margin: 0 4px 0 -2px;
				}
				span {
					color: #70b5f9;
				}
			}
		}
	}
`;

const Article = styled(CommentCard)`
	padding: 0;
	margin: 0 0 8px;
	overflow: visible;
`;

const SharedActor = styled.div`
	padding-right: 40px;
	flex-wrap: nowrap;
	padding: 12px 16px 0;
	margin-bottom: 8px;
	align-items: center;
	display: flex;
	a {
		margin-right: 12px;
		flex-grow: 1;
		overflow: hidden;
		display: flex; 
		text-decoration: none;

		img {
			width: 48px;
			height: 48px;
		}
		& > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-basis: 0;
			margin-left: 8px;
			overflow: hidden;
			span {
				text-align: left;
				&:first-child {
					font-size: 14px;
					font-weight: 700;
					color: rgba(0, 0, 0, 1);
				}

				&:nth-child(n+1) {
					font-size: 12px;
					color: rgba(0, 0, 0, 0.6);
				}
			}
		}
	}
	button {
		position: absolute;
		right: 12px;
		top: 0;
		background: transparent;
		border: none;
		outline: none;
	}
`;

export default Main;