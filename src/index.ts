/** Useful when we can't use the trim function because it also removes newlines */
function removeWhiteSpaces(s: string) {
  return s.replace(/^ +| +$/g, '');
}
/** Take a chat string or an array of chat
 * strings and return objects containing
 * the extracted information of each chat.
 */
function extractChatParts(chatStrings: string[] | string) {
  if (!Array.isArray(chatStrings)) {
    chatStrings = [chatStrings];
  }

  /**
   * In case there's no "agent" and "customer" strings,
   * we must infer these values ourselves by assigning
   * the first type to be "customer"
   */
  const users: { [name: string]: 'agent' | 'customer' } = {};

  return chatStrings.map((chatString) => {
    // The chat string always begins with a date
    const date = chatString.match(/\d{2}:\d{2}:\d{2}/)[0];

    let mention = chatString.match(/\d{2}:\d{2}:\d{2} .+ \: /)?.[0];

    // Case where there is no : separator after the customer/agent name
    if (!mention) {
      mention = `${date} ${chatString.split(' ')[1]} `;
    }
    const sentence = chatString.split(mention)[1];

    const name = mention.split(date)[1].split(' ')[1].toLowerCase();

    if (!(name in users)) {
      // The first user is always the customer
      if (Object.keys(users).length === 0) {
        users[name] = 'customer';
      } else {
        users[name] = 'agent';
      }
    }

    return {
      date,
      mention,
      sentence: removeWhiteSpaces(sentence),
      type: users[name] || removeWhiteSpaces(name.toLowerCase()),
    };
  });
}
/** Split by newlines, while still keeping the newline characters */
function splitLines(chat: string) {
  return (
    chat
      // This handles the case where chat lines are separated by newlines
      .split('\n')
      // Filter empty strings
      .filter((c) => c.trim())
      /**
       * To handle the case where we still want to keep the newline characters,
       * we first join the strings back but this time with a special divider.
       * We then use that divider to separate the strings again, this time with
       * the newline characters at the end of the sentences.
       */
      .join('\n-*-')
      .split('-*-')
      /**
       * Here we find extra chat lines that have not been separated by
       * newline characters. We insert a special divider again right
       * before the date, split by that divider and join them back agin.
       */
      .map((c) => {
        return c
          .replace(/(\d{2}:\d{2}:\d{2} )/gi, '-^-$&')
          .split('-^-')
          .filter((c) => c.trim());
      })
      // The operation above creates array sublevels we need to get rid of
      .flat()
  );
}

function parseChat(chat: string) {
  return extractChatParts(splitLines(chat));
}
export { parseChat };
