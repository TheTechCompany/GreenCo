import React from 'react';

export const ScreenSingleContext = React.createContext<{
	id?: string;
	slots?: any[];
	scheduleId?: string,
	campaigns?: any[];
	scheduledCampaigns?: any[];
	scheduleViews?: any[];
	tiers?: any[];
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
			lat: string;
			lng: string;
		}
	}
	refresh?:() => void;
}>({

})

export const ScreenSingleProvider = ScreenSingleContext.Provider