import React, { useState, useContext } from 'react';
import { View, FingerPrint } from 'grommet-icons';
import { ResponsiveContainer, AreaChart, YAxis, XAxis, Tooltip, CartesianGrid, Line, Area } from 'recharts'
import { Box, Text } from 'grommet';
import { CampaignSingleContext } from '../context';
import moment from 'moment';
import { GraphGrid } from '@hexhive/ui';
import { AnalyticBubble } from '../../../components/analytic-bubble/AnalyticBubble';
import { stringToColor } from '@hexhive/utils';

export const AnalyticsPage = () => {

	const [ useDefault, setUseDefault ] = useState(true);

	const { campaign, views, charts, interactions, interactionTimeline } = useContext(CampaignSingleContext);

	const activeCharts = useDefault ? [
		{
			id: 'view-count',
			type: 'bubble',
			label: "Appearances",
			x: 0,
			y: 0,
			w: 2,
			h: 3,
			data: "views"
		},
		{
			id: 'interaction-count',
			type: 'bubble',
			label: "Interactions",
			x: 2,
			y: 0,
			w: 2,
			h: 3,
			data: "interactions"
		},
		{
			id: 'people',
			type: 'area-chart',
			label: "Camera (past 7 days)",
			x: 0,
			y: 3,
			w: 6,
			h: 6,
			data: "peopleCount"
		},
		{
			id: 'people-7d',
			type: 'bubble',
			label: "People avg. weekly",
			x: 6,
			y: 0,
			w: 2,
			h: 3,
			data: "people-7d"
		},
		{
			id: 'interaction-timeline',
			label: "Interaction Timeline",
			type: 'line-chart',
			x: 0,
			y: 8,
			w: 6,
			h: 6,
			data: "interactionTimeline"
		}
	] : charts?.map((item) => ({
		...item,
		x: item.x || 0,
		y: item.y || 0,
		w: item.width || 1,
		h: item.height || 1,
	})) || []

	const renderGraphItem = (item: any) => {
		console.log({item});

		switch(item.type){
			case 'area-chart':
				let label= item.label;
				item = campaign?.[item.data]

				return (
				<Box background={'#fff'} round="xsmall" overflow="hidden" flex elevation='small'>
					<Box background={'#627df6'} pad="xsmall" direction='row'>
						<Text color={'white'}>{label}</Text>
					</Box>
					<ResponsiveContainer>
					<AreaChart
						data={item?.points}
						margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
						>
						<defs>
							{item?.keys?.map((key: string) => (
								<linearGradient id={key} x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor={stringToColor(key)} stopOpacity={0.8}/>
								<stop offset="95%" stopColor={stringToColor(key)} stopOpacity={0}/>
								</linearGradient>
							))}
							
						</defs>
						<XAxis minTickGap={25} dataKey="time" />
						<YAxis />
						<Tooltip />
						<CartesianGrid stroke="#f5f5f5" />
						{item?.keys?.map((key: string) => (
							<Area type="monotone" dataKey={key} stroke={stringToColor(key)} fillOpacity={1} fill={`url(#${key})`} />
						))}
						{/* <Line type="monotone" dataKey={"interactions"}  stroke="#ff7300" yAxisId={0} /> */}
					</AreaChart>
				</ResponsiveContainer>
				</Box>)
			case 'bubble':
				return (
					<AnalyticBubble 
					color="white"
					background="#627df6"
					icon={<FingerPrint />}
					label={item.label}
					value={campaign?.[item.data]}
					/>
				)
			case 'line-chart':
				return (
				<Box  overflow="hidden" flex elevation='small' round="xsmall" background={"#fff"}>
					<Box background={"#627df6"} direction="row" pad="xsmall">
						<Text color="white">{item.label}</Text>
					</Box>
					<ResponsiveContainer width={'100%'}>
					<AreaChart
					
						data={interactionTimeline?.map((x) => ({
							...x,
							time: moment(new Date(x.time).getTime()).format('DD/MM')
						}))}
						margin={{ top: 5, right: 20, bottom: 5 }}
						>
						<defs>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
							</linearGradient>
						</defs>
						<XAxis minTickGap={25} dataKey="time" />
						<YAxis dataKey="interactions" />
						<Tooltip />
						<CartesianGrid stroke="#f5f5f5" />
						<Area type="monotone" dataKey="interactions" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
						{/* <Line type="monotone" dataKey={"interactions"}  stroke="#ff7300" yAxisId={0} /> */}
					</AreaChart>
				</ResponsiveContainer>
				</Box>
				)
		}
	}

	return (
		<Box pad="xsmall" gap="small" flex>
			<GraphGrid
				noWrap={true}
				layout={activeCharts}
				onLayoutChange={(layout) => {
					console.log(layout)
				}}
				>
				{(item: any) => renderGraphItem(item)}
			</GraphGrid>
			{/* <Box direction="row" justify="between">

				<AnalyticBubble
					color="white"
					background="#627df6"
					icon={<View />}
					label="Appearances"
					value={views} />
				
				<AnalyticBubble
					color="white"
					background="#627df6"
					icon={<View />}
					label="People avg. daily"
					value={"0"} />
				
				<AnalyticBubble
					color="white"
					background="#627df6"
					icon={<View />}
					label="People avg. monthly"
					value={"0"} />

				<AnalyticBubble
					color="white"
					background="#627df6"
					icon={<FingerPrint />}
					label="Engagements"
					value={interactions} />

			</Box> */}

			{/* <Box 
				overflow="hidden" 
				background="white" 
				round="xsmall" 
				elevation="small" 
				flex>
				<Box margin={{bottom: 'xsmall'}} pad={'xsmall'} background="accent-2" direction="row">
					<Text>Interactions</Text>
				</Box>
				<ResponsiveContainer width={'100%'}>
					<AreaChart
					
						data={interactionTimeline?.map((x) => ({
							...x,
							time: moment(new Date(x.time).getTime()).format('DD/MM')
						}))}
						margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
						>
						<defs>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
							</linearGradient>
						</defs>
						<XAxis minTickGap={25} dataKey="time" />
						<YAxis dataKey="interactions" />
						<Tooltip />
						<CartesianGrid stroke="#f5f5f5" />
						<Area type="monotone" dataKey="interactions" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
						{/* <Line type="monotone" dataKey={"interactions"}  stroke="#ff7300" yAxisId={0} /> 
					</AreaChart>
				</ResponsiveContainer>
			</Box> */}
		</Box>
	)
}