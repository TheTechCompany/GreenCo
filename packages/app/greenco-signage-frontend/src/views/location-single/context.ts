import React from 'react';

export const ClusterSingleContext = React.createContext<{
	id?: string;
	analytics?: {keys: any, points: any},
	locations?: any[],
	screens?: any[]
	refresh?: () => void;
}>({

})

export const ClusterSingleProvider = ClusterSingleContext.Provider