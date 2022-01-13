import React from 'react';

export const ClusterSingleContext = React.createContext<{
	id?: string;
	analytics?: any[],
	locations?: any[],
	screens?: any[]
}>({

})

export const ClusterSingleProvider = ClusterSingleContext.Provider