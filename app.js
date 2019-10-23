'use strict';

require('dotenv').config();

const parseduration = require( "parse-duration" );

const ComfyDiscord = require( "comfydiscord" );
ComfyDiscord.onCommand = ( channel, user, command, message, flags ) => {
  // if( command == "test" ) {
  //   ComfyDiscord.Say( "general", "replying to !test" );
  // }
}
ComfyDiscord.Init( process.env.DISCORDTOKEN );

const ComfyJS = require( "comfy.js" );
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  switch( command ) {
    case "idears":
      if( flags.broadcaster || flags.mod || flags.vip ) {
        if( message ) {
          ComfyDiscord.Say( "💡idears", message );
          ComfyJS.Say( "Idea posted in Discord! (" + message + ")" );
        }
      }
      break;
    case "remind":
      if( flags.broadcaster || flags.mod || flags.vip ) {
        var duration = parseduration( message );
        if( duration ) {
          setTimeout( () => {
            ComfyJS.Say( "MrDestructoid BEEP BEEP for " + user + "! (" + message + ")" );
          }, duration );
        }
      }
  }
}
ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH );
