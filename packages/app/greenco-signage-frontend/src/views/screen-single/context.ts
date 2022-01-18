import React from 'react';

export const ScreenSingleContext = React.createContext<{
	id?: string;
	slots?: any[];
	screen?: {
		id: string;
		name: string;
		location: {
			id: string;
			name: string;
		}
	}
}>({

})

export const ScreenSingleProvider = ScreenSingleContext.Provider