import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Container } from './ContentContainer';

const Header: React.FC = () => (
	<HeaderWrap>
		<ContainerStyled>
			<StyledLink href="/">TV Bland</StyledLink>
			<StyledLink href="/last-viewed">Last Viewed Shows</StyledLink>
		</ContainerStyled>
	</HeaderWrap>
);

const HeaderWrap = styled.header`
	width: 100%;
	height: 100%;
	padding: 40px 0;
	font-size: 20px;
	font-weight: 600;
	background-color: ${({ theme }) => theme.colors.Yellow};

	@media (max-width: 1024px) {
		padding: 25px 0;
	}
	@media (max-width: 767px) {
		padding: 15px 0;
	}
`;

const ContainerStyled = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.colors.Black};
	text-decoration: none;
	transition: opacity 0.2s ease;

	&:hover {
		opacity: 0.7;
	}
`;

export default Header;
