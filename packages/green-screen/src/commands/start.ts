import { Arguments, CommandBuilder, string } from 'yargs';
import crypto from 'crypto';
import { existsSync, writeFileSync } from 'fs';
import { GreenScreen } from '..';

const Moniker = require('moniker')
// import jwt from 'jsonwebtoken'

type Options = {
};
  
  export const command: string = 'start';
  export const desc: string = 'Start';
  
  export const builder: CommandBuilder<Options, Options> = (yargs) =>
	yargs
	  .options({
	
	  })

  export const handler =  async (argv: Arguments<Options>) => {
	// const {  } = argv;


	const screen = new GreenScreen();
	await screen.start()
  };