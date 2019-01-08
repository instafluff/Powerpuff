'use strict';

require('dotenv').config();

const twig = require('twig');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var TwitchJS = require('twitch-js');
var parseduration = require('parse-duration');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.set('cache', false); // Disable view cache
twig.cache(false);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const Discord = require('discord.js');
const discord = new Discord.Client();

discord.on('ready', () => {
  console.log(`Logged in as ${discord.user.tag}!`);
});

discord.on('message', msg => {
  var channel = msg.channel.name;
  var isBot = msg.author.bot;
  var user = msg.author.username;
  var userNum = msg.author.discriminator;
  var nickname = msg.member.nickname;
  var name = nickname || ( user + "#" + userNum );
  var message = msg.content;
  console.log( "#" + channel + " (" + name + "): " + message );
  if( !isBot ) {
    const discordChannel = msg.member.guild.channels.find(ch => ch.name === 'powerpuff');
    // Do nothing if the channel wasn't found on this server
    if (!discordChannel) return;
    // discordChannel.send( "HELLO THIS IS POWERPUFF" );
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  }
});

discord.login(process.env.DISCORDTOKEN);

// Setup the client with your configuration; more details here:
// https://github.com/twitch-apis/twitch-js/blob/master/docs/Chat/Configuration.md
const options = {
  channels: ["#" + process.env.TWITCHUSER],
  // Provide an identity
  identity: {
    username: process.env.TWITCHUSER,
    password: process.env.OAUTH
  },
};

const twitch = new TwitchJS.client(options);

// Add chat event listener that will respond to "!command" messages with:
// "Hello world!".
twitch.on('chat', (channel, userstate, message, self) => {
  let isBroadcaster = ( "#" + userstate[ "username" ] ) == channel;
  let isMod = userstate[ "mod" ];
  let isVip = userstate[ "badges" ] && userstate[ "badges" ].vip;
  let isSubscriber = userstate[ "subscriber" ];
  let username = userstate[ "display-name" ];

  if( isBroadcaster || isMod || isVip ) {
    if( message.startsWith( "!idears " ) ) {
      let idea = message.replace( "!idears ", "" );
      if( idea ) {
        // console.log( discord.channels );
        const discordChannel = discord.channels.find(ch => ch.name.endsWith("idears") );
        console.log( discordChannel );
        // Do nothing if the channel wasn't found on this server
        if( !discordChannel ) return;
        discordChannel.send( idea );
        twitch.say( channel, "Idea posted in Discord! (" + idea + ")" );
      }
    }
  }

  if( message.startsWith( "!remind " ) ) {
    var reminder = message.replace( "!remind ", "" );
    var duration = parseduration( message );
    if( duration ) {
      setTimeout( () => {
        twitch.say( channel, "MrDestructoid BEEP BEEP for " + username + "! (" + reminder + ")" );
      }, duration );
    }
  }
});

// Finally, connect to the channel
twitch.connect();

module.exports = app;
