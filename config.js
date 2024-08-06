 //#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "245743416283";
global.owner = process.env.OWNER_NUMBER || "254743416283";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUQ3ZlRncnhibzBMNEZ2a1h4UHdtRGVuUzlBZnZXaE5PZHg2N2FnUVkzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia280czM3YWhXNDBOQXdKTmRuVlBUQjYremJhOFphaXZGUVFLMCtqMVJoZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSXVrZkgxbkxTdUJCY1NvN0t3bDVFLzVhTHBTbHFiR2RYZWdrQ3RrckVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4elBLa0FtMTBaWGFLSGNzZnplM0FrSFpoMUcxeVBPSksvZkdKTThYeUNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FY1FVRDBnbkVKLzF6SU00NGprN0lhYTljbGJ1cmpETVlPKzZMMVcrMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp0R2xmWEhlNjQ1QkUxR2NqRFA0WEJNNkJiTFNjdTdWQUtVMU1NaVpKU3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdwcXNBUmtxK1hSWFlncTJpUkt4cmlNRnIzcFJhSWxCOXNjZDVhclYyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJOZWRlVm9xSmNRTTE3WlkwcUxRcTlrOVVZTjdYMzFaeEpWNC9OSjYyTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhlYm5xWEtmRTdKeVhxcU9xaTF3ZEV1WGltNFhZS0k1NEY4dVo4bFM4d29QNC8vaGNKQWt0MmN2ZW1vUlBwN2J2R1dUd2RYQnUxc1dXQnFteFVpemlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6ImErZXNMWHhheG1JNkdaWkZEYUpJaUVMc1FkT1p5TkM2UkxzdU1oVHJjanM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzk4ODU1Mjc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ4QzZFMEY5NEFCRDJGQkEwMUFFMEIzREE0NTMxRjJEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5NTUyNTl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5ODg1NTI3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0OTFDNDEzQzk1NzU3NEE3RjVCMDYzNkU5NUU0NEE5RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyOTU1MjU5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkZTJaUS1odlJIMmhTcmNkYVRDRm1BIiwicGhvbmVJZCI6ImNlNDg3ZWExLWQwZTItNDcwZi1iNWRhLTY1OGM2ZTk1Y2JlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNkQySFYzR3NWYWdWSS9iRHhmSSsxZU1nMVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEFVSG10aTFzVEF1eHpXaFlkRi9hR3BsbzJ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdBVEUxTFg4IiwibWUiOnsiaWQiOiIyNTQ3OTg4NTUyNzk6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJERVdJU1Pwn6Ww8J+lsPCfpbDwn6WwIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbVV2djRFRU92cnlMVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6eW5leWtaRW9SUllDY2k5NmxXbWMyY0puR0I4QWlqSlR5blF6U1Q2K1M4PSIsImFjY291bnRTaWduYXR1cmUiOiJYMTV3OFFEZFJUN3BHYnpSeGIvYkE1ZnQwb1RTSDRFSXl4L2hRakhmK3RxYm00dGpsUXBUMDloMzIreTdXOXVyVWZDUDIyUDdYM3pJTVl1cXpUdG9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ2RRWGNtQlNIZTBOa1lrSlM5b1lmQTRDRHA2RFBBRktzTE5CU2ZzNGZGL2htNE5PRDlBTVVsYkQ4U0RZdThuVTc5dVlOM0pBUWQ0QnIyZ2YxdkVaaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTg4NTUyNzk6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjOHAzc3BHUktFVVdBbkl2ZXBWcG5ObkNaeGdmQUlveVU4cDBNMGsrdmt2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTU1MjU3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVrRSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "CYRIL",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "CYNUX",
  ownername: process.env.OWNER_NAME || "CALDEN CYRIL",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
