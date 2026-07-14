# discord-autoresponder-bot 🐾

hello! this is a super simple, lightweight discord auto-responder bot designed to listen for specific text triggers and reply instantly. 

currently, it's set up to catch anyone saying "must have been the wind" (and its sneaky variations nya) and reply with:

> ts was NOT me 🥀

cuz it really wasn't me! i swear! (uwu)
---

## features :3
* **smart regex matching:** catches variations like *must've been the wind*, *it must have been the wind*, *must been the windd*, etc.
* **user cooldowns:** doesn't spam! has a cozy 90-second cooldown per user so we don't get in trouble.
* **memory friendly:** keeps its cache super light so your server/VPS doesn't run out of catnip.

## how to set it up (for humans & cats alike) 🐾

### 1. clone the repo
```bash
git clone [https://github.com/omimilk/discord-autoresponder-bot.git](https://github.com/omimilk/discord-autoresponder-bot.git)
cd discord-autoresponder-bot
```

### 2. install dependencies
make sure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 3. config setup
create a `config.json` file in the root directory and put your discord token in it! 

```json
{
  "discordToken": "YOUR_SUPER_SECRET_TOKEN_HERE"
}
```

### 4. run the bot!
```bash
node index.js
```
and you are good to go! (=^･ω･^=)

---
*made with love and milk* 🥛