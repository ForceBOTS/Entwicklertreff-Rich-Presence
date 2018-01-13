const client = require('discord-rich-presence')('401675380223770624');

client.updatePresence({
  state: 'join now!',
  details: 'entwickler.cc',
  largeImageKey: 'entwicklertreff_big',
  largeImageText: 'https://entwickler.cc',
  smallImageKey: 'entwicklertreff_small',
  smallImageText: 'Deutschlands größte Discord-Entwicklercommunity',
  instance: false,
});
