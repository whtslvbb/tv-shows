import 'styled-components';

import { ITheme } from 'styles/global';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
