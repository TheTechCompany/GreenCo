import { Maybe, TemplateSlot, TemplateSlotPlugin } from '@greenco/signage-api';
import React from 'react';

interface TPlugin {
	id?: string, 
	name?: string,
	 type?: string, 
	 source?: string,
	  sourceType?: string, 
	  sourceVersion?: string
}

interface TSlot {
	id?: string;
	name?: string;

	plugins?: TPlugin[];
}

interface ITemplateContext{
	templateId?: string,
	slots?: TSlot[]
	plugins?: TPlugin[],
	refresh?: () => void;
}

export const TemplateSingleContext = React.createContext<ITemplateContext>({

})

export const TemplateSingleProvider = TemplateSingleContext.Provider;
