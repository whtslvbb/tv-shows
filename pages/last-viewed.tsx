import React, { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import Meta from '../components/common/Meta';
import Cards from '../components/Home/Cards';
import { IScheduleItem } from '../api/main';
import { Section } from '../components/Home/Home';
import ContentContainer from '../components/common/ContentContainer';
import styled from 'styled-components';

const LastViewedPage: React.FC = () => {
	const [scheduleItems, setScheduleItems] = useState<IScheduleItem[]>([]);

	// функція для отримання останніх переглянутих шоу
	const getLastViewedShows = (): IScheduleItem[] => {
		if (typeof window === 'undefined') return [];
		const data = localStorage.getItem('lastViewedShows');
		return data ? JSON.parse(data) : [];
	};

	useEffect(() => {
		const viewed = getLastViewedShows();
		setScheduleItems(viewed);
	}, []);

	return (
		<>
			<Meta title='Last Viewed Shows' />
			<Layout>
				<Section>
					<Wrap>
						<ContentContainer>
							<InfoBlock>
								<Text>TV Show and web series database</Text>
								<Text>
									Create personalised schedules. Episode guide, cast, crew and
									character information
								</Text>
							</InfoBlock>
						</ContentContainer>
					</Wrap>
				</Section>
				<Cards
					items={scheduleItems}
					setScheduleItems={() => {}} 
					title={'Last viewed shows'}
					pagination={false}
				/>
			</Layout>
		</>
	);
};

const Wrap = styled.div`
	background-color: ${({ theme }) => theme.colors.Yellow};
`;

const InfoBlock = styled.div`
	padding: 50px 0 100px;
	font-size: 26px;
	max-width: 600px;

	@media (max-width: 1024px) {
		padding: 40px 0 80px;
	}
	@media (max-width: 767px) {
		padding: 20px 0 50px;
		font-size: 22px;
	}
`;
const Text = styled.p`
	font-size: 20px;
	line-height: 1.5;
`;

export default LastViewedPage;
