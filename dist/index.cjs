'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const regexes = [
  /^discordapp.cam/,
  /^discordap\..*/,
  /^airdrop-discord\.ru/,
  /^discord.*\.gifts?/,
  /^discord-(?:app|give|nitro-gift|nitros|spooky)\..*/,
  /^discord\.foundation/,
  /^discord(?:gift|nitro|xgift).*\..*/,
  /^dlscord.*/,
  /^free-?discordnitro\..*/,
  /^gift-discord\.com/,
  /^giftsdiscord\..*/,
  /^gift-discord\..*/,
  /^giftsdiscord\..*/,
  /^giiveaway-discord\..*/,
  /^steam-discords\..*/,
  /^disordgift\..*/,
  /^com-nitro\..*/,
  /^discocrd-nitro\..*/,
  /^discorcd-nitro\..*/,
  /^discorclnitro\..*/,
  /^discrodnitro\..*/,
  /^nitro.*\.gift.*/,
  /^nitro.*\.gifts.*/,
  /^steamcommunity-nitro\..*/,
  /^steamgiftnitro\..*/,
  /^discordrgift.com/
];

function findURLsInText(str) {
  const urlPattern = /https?:\/\/(?:www\d?\.)?([^\s/]+)/g;
  const matches = str.matchAll(urlPattern);
  return [...matches].map((match) => match[1].toLowerCase());
}
async function checkString(str) {
  const matches = findURLsInText(str);
  for (const match of matches) {
    for (const regex of regexes) {
      if (regex.test(match)) {
        return true;
      }
    }
  }
  return false;
}

exports.checkString = checkString;
