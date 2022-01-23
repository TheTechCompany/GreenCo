import React from 'react';

export const ScreenSingleContext = React.createContext<{
	id?: string;
	slots?: any[];
	screen?: {
		id: string;
		name: string;
		template?: {
			id: string;
			name: string;

			slots: any[]
		}
		location: {
			id: string;
			name: string;
		}
	}
	refresh?:() => void;
}>({

})

export const ScreenSingleProvider = ScreenSingleContext.Provider