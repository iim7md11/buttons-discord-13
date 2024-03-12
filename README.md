```markdown
<div align="center">
  <h1>buttons-discord-13</h1>
  <p>
    <a href="https://www.npmjs.com/package/buttons-discord-13"><img src="https://img.shields.io/npm/v/buttons-discord-13?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/buttons-discord-13"><img src="https://img.shields.io/npm/dt/buttons-discord-13?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/buttons-discord-13"><img src="https://nodei.co/npm/buttons-discord-13.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

## 📂 | Installation
```sh
npm i buttons-discord-13
```

## 📜 | Setup
```js
const discord = require('discord.js'); // Define the discord.js module
const client = new discord.Client(); // Creating discord.js client (constructor)
const disbut = require('buttons-discord-13');
disbut(client);
```
### ✍ | Example Usage
```js
const { MessageButton } = require('buttons-discord-13');

// Create a new button
const button = new MessageButton()
  .setLabel('Click me!')
  .setStyle('blurple')
  .setID('example_button');

// Add the button to a message
message.channel.send('Hello, world!', {
  components: [
    {
      type: 1, // ACTION_ROW
      components: [button],
    },
  ],
});
```

## 🔄 | Updates
- **Version 1.0.0:**
  - Added new feature.
  - Improved performance in ABC functionality.
  - Bug fixes in PQR module.

## 🚫 | Removed
- Removed outdated information about Discord.js v12.

```
