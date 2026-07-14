const { Client, GatewayIntentBits, Options } = require('discord.js');
const config = require('./config.json');

const REPLY_REGEX = /(?:\bit[\s\W]+)?(?:must['’]?ve|must[\s\W]+have)[\s\W]+been[\s\W]+the[\s\W]+windd*\b\??/i;
const REPLY_TEXT = 'ts was NOT me 🥀';
const COOLDOWN_MS = 90 * 1000;

const userCooldowns = new Map();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  makeCache: Options.cacheWithLimits({
    MessageManager: 0,
  }),
  sweepers: {
    messages: {
      interval: 300,
      lifetime: 600,
    },
    threads: {
      interval: 3600,
      lifetime: 14400,
    },
  },
});

client.on('messageCreate', async (message) => {
  if (!message.guild || message.author.bot) return;

  const content = message.content;

  if (REPLY_REGEX.test(content)) {
    const userId = message.author.id;
    const now = Date.now();
    const last = userCooldowns.get(userId);

    if (last) {
      if ((now - last) < COOLDOWN_MS) {
        return;
      } else {
        userCooldowns.delete(userId);
      }
    }

    try {
      await message.reply(REPLY_TEXT);
      userCooldowns.set(userId, now);

      setTimeout(() => {
        const recorded = userCooldowns.get(userId);
        if (recorded && (Date.now() - recorded) >= COOLDOWN_MS) {
          userCooldowns.delete(userId);
        }
      }, COOLDOWN_MS + 1000);

    } catch (err) {
      console.error('error replying:', err);
    }
  }
});

client.login(config.discordToken);