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
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
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
    discordChannel.send( "HELLO THIS IS POWERPUFF" );
    // if (msg.content === 'ping') {
    //   msg.reply('Pong!');
    // }
  }
});

client.login(process.env.DISCORDTOKEN);

module.exports = app;
