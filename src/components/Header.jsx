import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const Header = () => {
	const THEHEDADER = styled.header``;
	return (
		<header>
			<NavBar />
			<h1>My portfolio</h1>
		</header>
	);
};

export default Header;
