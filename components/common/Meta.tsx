import React from 'react';
import Head from 'next/head';

const defaultTitle = 'Nada Test LambdaTeam';

const Meta: React.FC<{ title?: string }> = ({ title = defaultTitle }) => (
	<Head>
		<title>{title}</title>
		<meta name='description' content='Nada Test LambdaTeam' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta name='theme-color' content='#000000' />
		
		<link rel='icon' href='/favicon.ico' />
		<link rel='apple-touch-icon' href='/public/icons/web-app-manifest-192x192.png' />
		<link rel='manifest' href='/manifest.json' />
	</Head>
);

export default Meta;
