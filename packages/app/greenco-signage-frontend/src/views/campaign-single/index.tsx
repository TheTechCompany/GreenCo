import { Box, List, Button, Text } from 'grommet';
import React, {useCallback, useState} from 'react';
import { ScreenPreview } from '../../components/screen-preview';
import { Upload, Analytics, Add, Tools, Document, Qr, MoreVertical, DownloadOption} from 'grommet-icons';
import { UploadPlaceholder } from '../../components/upload-placeholder';
import { useMutation, useQuery } from '@greenco/signage-api';
import { downloadCampaignAssets, uploadCampaignAssets } from '../../api/campaign';
import { useQuery as useApolloQuery, useApolloClient, gql } from '@apollo/client';
import { CreateAnalyticModal } from '../../modals/create-analytic';
import QRCode from 'qrcode.react'
import { matchPath, Route, Routes, useParams, useNavigate, useResolvedPath, useMatch } from 'react-router-dom';
import { FilesPage } from './pages/files';
import { AnalyticsPage } from './pages/analytics';
import { ToolsPage } from './pages/tools';
import { CampaignSingleProvider } from './context';


export const NavButtons = (props) => {
	return 	props.menu.map((item, ix) => (
		<NavButton 
			item={item}
			onClick={() => props.onClick(item)}//() => setView(item.route)
			/>
	))
}

export const NavButton = ({item, onClick}) => {
	
	const path = useResolvedPath(item.route)
	const active = useMatch(path.pathname)

	return <Button 
			active={active != null}
			hoverIndicator 
			plain 
			onClick={() => onClick(item)}//() => setView(item.route)
			style={{padding: 6, borderRadius: 3}} 
			icon={item.icon} />
}
export const CampaignSingle = (props) => {
	const [ downloading, setDownloading ] = useState(false);

	const navigate = useNavigate()

	const client = useApolloClient()

	const query = useQuery()
	
	const { id } = useParams()

	const [ analyticModalOpen, setAnalyticModalOpen ] = useState(false)
	const [ selectedAnalytic, setSelectedAnalytic ] = useState(false)
	const campaign = query.campaigns({where: {id: id}})?.[0]

	const setView = (path: string) => {
		navigate(`${path}`)
	}

	const menu = [
		{
			route: 'files',
			label: 'Files',
			icon: <Document size="small" />,
		},
		{
			route: 'analytics',
			label: "Analytics",
			icon: <Analytics size="small" />,
		},
		{
			route: 'tools',
			label: "Tools",
			icon: <Tools size="small" />
		}
	]
	// const [files, setFiles] = useState<any[]>([])

	const { data } = useApolloQuery(gql`
		query Q ($id: ID) {
			campaigns(where: {id: $id}) {
				id
				views
				interactions

				interactionTimeline {
					time
					interactions
				}

				assetFolder
				assets {
					name
					type
					cid
					path
				}

				analytics {
					id
					name
					type
					data
				}
			}
		}
	`, {
		variables: {
			id: id,
		}
	})

	console.log(data)
	const views = data?.campaigns?.[0]?.views
	const files = data?.campaigns?.[0]?.assets || [];
	const analytics = data?.campaigns?.[0]?.analytics || [];
	
	const interactions = data?.campaigns?.[0]?.interactions
	const interactionTimeline = data?.campaigns?.[0]?.interactionTimeline


	const active = menu.map((item) => matchPath(window.location.pathname.replace(`/dashboard/signage`, ''), 
		`${item.route}`,
	) != null).indexOf(true)

	const downloadCampaign = async () => {
		if(!id) return;
		setDownloading(true)
		await downloadCampaignAssets(id)
		setDownloading(false)
	}

	return (
		<CampaignSingleProvider value={{
			campaign,
			files,
			analytics,
			views,
			interactions,
			interactionTimeline,
			refresh: () => {
				client.refetchQueries({include: ['Q']})
			}
		}}>
		<Box 
			gap="xsmall"
			direction="row"
			round="xsmall"
			flex>

			
			<ScreenPreview
				previewUrl={files.length > 0 ?  `${process.env.NODE_ENV == 'production' ? 'https://api.greenco.co.nz' : 'http://localhost:9009'}/api/campaign/${id}/preview/index.html` : undefined} />

			<Box
				overflow="hidden"
				round="xsmall"
				background="light-1"
				 flex>
				<Box direction="row" justify="between" align="center" pad="xsmall" background="accent-2">
					<Text>{campaign.name}</Text>

					<Box direction="row" gap="xsmall">
						<Button 
							disabled={downloading}
							onClick={() => downloadCampaign()}
							hoverIndicator 
							plain 
							style={{padding: 6, borderRadius: 3}} 
							icon={<DownloadOption size="small" />} />

						<NavButtons menu={menu} onClick={(item) => setView(item.route)} />
						{/* {menu.map((item, ix) => (
							<Button 
							active={ix == active}
							hoverIndicator 
							plain 
							onClick={() => setView(item.route)}
							style={{padding: 6, borderRadius: 3}} 
							icon={item.icon} />
						))} */}
					</Box>
					
				</Box>

				<Box flex>
					<Routes>
						<Route path={`/`}  element={<AnalyticsPage/>} />
						<Route path={`files`} element={<FilesPage/>} />
						<Route path={`analytics`} element={<AnalyticsPage/>} />
						<Route path={`tools`} element={<ToolsPage/>} />
					</Routes>
				</Box>

				
			</Box>
		</Box>
		</CampaignSingleProvider>
	)
}