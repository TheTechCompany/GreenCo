import React from 'react';

export const ScheduleSingleContext = React.createContext<{
	scheduleId?: string;
	screens?: any[];
	locations?: any[];
	campaigns?: any[];
	views?: {id: string, name: string, tags: string[]}[]
	tiers?: any[]
	refresh?: () => void;

	activeView?: string | null,
	changeActiveView?: (view: string) => void
}>({

})

export const ScheduleSingleProvider = ScheduleSingleContext.Provider