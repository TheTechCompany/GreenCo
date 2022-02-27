import { Box } from 'grommet';
import React, { useMemo } from 'react';
import useResizeAware from 'react-resize-aware';

export interface ScreenPreviewProps {
	previewUrl?: string;
	width?: any;
	height?: any;
}

export const PreviewFrame = (props: any) => {
	return (
		<Box flex>
			<iframe {...props} style={{
				marginBottom: -1460,
				width: '1080px', height: '1920px',
				transform: `scale(${props.width}, ${props.height})`,
				transformOrigin: `0px 0px`, border: 'none', outline: 'none'}} />
		</Box>
	)
}

export const CampaignPreview : React.FC<ScreenPreviewProps> = (props) => {
	const [resizeListener, sizes] = useResizeAware();

	const {width, height} = useMemo(() => {
		console.log(sizes)
		return {
			width: ((sizes?.height || 1920) / 1920).toFixed(2),
			height: ((sizes?.height || 1920) / 1920).toFixed(2)
		}
	}, [sizes])

	return (
		<Box
			style={{aspectRatio: '1080 / 1920'}}
			background="neutral-1"
			width={props.width}
			height={props.height}
			round="small"
			elevation="small">

			<Box  overflow="hidden" background="neutral-2" round="small" flex >
			{resizeListener}
			
				{props.previewUrl ? (<PreviewFrame width={width} height={height} src={props.previewUrl} />) : null}
			
			</Box>
		</Box>	
	)
}