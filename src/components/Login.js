import styled from 'styled-components';

const Login = (props) => {
	return (
		<Container>
			<Nav>
				<a href="/">
					<img src="/images/login-logo.svg" alt="linkedin-login-logo"/>
				</a>
			</Nav>
		</Container>
	)
}

const Container = styled.div``;

const Nav = styled.nav`
	max-width: 1128px;
	margin: auto;
	padding: 12px 0 16px;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: space-between;
	flex-wrap: nowrap;

	& > a {
		width: 135px;
		height: 34px;
		@media (max-width: 768px) {
			padding: 0 5px;
		}
	}
`;

export default Login;