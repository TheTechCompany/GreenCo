import { Arguments, CommandBuilder, string } from 'yargs';
import crypto from 'crypto';
import { existsSync, writeFileSync } from 'fs';

const Moniker = require('moniker')
// import jwt from 'jsonwebtoken'

type Options = {
	generate: boolean;
	validate: boolean;
	isPrivate: boolean;
	width: number;
	height: number;
	path: string;
};
  
  export const command: string = 'config';
  export const desc: string = 'Generate config';
  
  export const builder: CommandBuilder<Options, Options> = (yargs) =>
	yargs
	  .options({
		generate: {type: 'boolean', description: "Generate config file", default: false},
		validate: {type: 'boolean', description: "Validate config file", default: false},
		isPrivate: {type: 'boolean', description: "Specify private in config", default: false},
		height: {type: 'number', description: "Specify height in config", default: 1920},
		width: {type: 'number', description: "Specify width in config", default: 1080},
		path: {type: 'string', description: "Path to config file", default: './config.json'}
	  })

  export const handler =  (argv: Arguments<Options>) => {
	const { path, generate, validate, isPrivate, width, height } = argv;


	if(generate){
		let newConfig = {
			"code": Moniker.choose(),
			isPrivate: isPrivate,
			width,
			height
		}
		console.log("GENERATE", newConfig)
	}

	if(!existsSync(path)){
		console.error("Specified key folder does not exist")
		return process.exit(1)
	}
	crypto.randomBytes(48, (err, buff) => {
		if(err) throw new Error(err.message)
		// let token = jwt.sign({deviceId: buff.toString('base64')}, 'test')
		
		// writeFileSync(path, token)
		process.exit(0)
	})

  };