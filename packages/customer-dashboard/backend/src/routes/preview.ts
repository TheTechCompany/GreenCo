import { Router } from "express"
import path from 'path';

export default () => {

    const campaignRootDir = '/data/campaigns';
    
    const router = Router();

    router.get(['/:id', '/:id/*'], async (req, res) => {
        let campaignId = req.params.id

        let campaignDir = path.join(campaignRootDir, campaignId)

        let filePath = path.join(campaignDir, (req.params as any)?.['0'].length > 0 ? (req.params as any)?.['0'] : '/index.html')

        res.contentType(path.basename(filePath));
        
        res.sendFile(filePath);

        // console.log(filePath)
        // try{
        // 	const result = await fs.readFile(campaignId, filePath)
        // 	if(!result) res.send({error: "no file"})
        // 	res.contentType(path.basename(filePath))
        // 	res.send(result)
        // }catch(e){
        // 	res.send({error: e})
        // }
    })

    return router;
}