const { MessageActionRow: DiscordMessageActionRow } = require('discord.js');
const MessageButton = require('./MessageButton');
const MessageMenu = require('./MessageMenu');
const { MessageComponentTypes } = require('../Constants');
const BaseMessageComponent = require('./interfaces/BaseMessageComponent');

class MessageActionRow extends BaseMessageComponent {
  constructor(data = {}) {
    super({ type: 'ACTION_ROW' });
    this.setup(data);
  }

  setup(data) {
    if ('components' in data) {
      this.components = data.components.map((c) => BaseMessageComponent.create(c));
    } else {
      this.components = [];
    }

    return this;
  }

  addComponents(...components) {
    this.components.push(...components.flat(Infinity).map((c) => BaseMessageComponent.create(c)));
    return this;
  }

  addComponent(component) {
    return this.addComponents(component);
  }

  removeComponents(index, deleteCount, ...components) {
    this.components.splice(index, deleteCount, ...components.flat(Infinity).map((c) => BaseMessageComponent.create(c)));
    return this;
  }

  toJSON() {
    return new DiscordMessageActionRow().addComponents(
      ...this.components.map((c) => {
        if (c instanceof MessageButton || c instanceof MessageMenu) {
          return c.toJSON();
        } else {
          switch (c.type) {
            case MessageComponentTypes.BUTTON:
              return new MessageButton(c).toJSON();
            case MessageComponentTypes.SELECT_MENU:
              return new MessageMenu(c).toJSON();
          }
        }
      })
    );
  }
}

module.exports = MessageActionRow;
