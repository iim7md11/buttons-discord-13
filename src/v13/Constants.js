exports.MessageComponentTypes = {
  ACTION_ROW: 'ACTION_ROW',
  BUTTON: 'BUTTON',
  SELECT_MENU: 'SELECT_MENU',
};

exports.MessageButtonStyles = {
  blurple: 'PRIMARY',
  grey: 'SECONDARY',
  green: 'SUCCESS',
  red: 'DESTRUCTIVE',
  url: 'LINK',
};

exports.MessageButtonStylesAliases = {
  PRIMARY: 'blurple',
  SECONDARY: 'grey',
  SUCCESS: 'green',
  DESTRUCTIVE: 'red',
  LINK: 'url',
};

exports.InteractionReplyTypes = {
  PONG: 'PONG',
  CHANNEL_MESSAGE_WITH_SOURCE: 'CHANNEL_MESSAGE_WITH_SOURCE',
  DEFFERED_CHANNEL_MESSAGE_WITH_SOURCE: 'DEFFERED_CHANNEL_MESSAGE_WITH_SOURCE',
  DEFFERED_UPDATE_MESSAGE: 'DEFFERED_UPDATE_MESSAGE',
  UPDATE_MESSAGE: 'UPDATE_MESSAGE',
};


function createEnum(keys) {
  const obj = {};
  for (const [index, key] of keys.entries()) {
    if (key === null) continue;
    obj[key] = index;
    obj[index] = key;
  }
  return obj;
}
