import React from 'react';

export const DisplaySingleContext = React.createContext<{
	id?: string;
	slots?: any[]
}>({

})

export const DisplaySingleProvider = DisplaySingleContext.Provider