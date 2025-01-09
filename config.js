const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJ3a2xDSjYzdkI0dE13cnI4Nm84eWJFN3V5TC9JZ0lOd0tldStHV0VsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3MvZWcxQVovZTEyOVU4L21mYW1IK0VMa29oRGo2MlFwSTJyTkVESHlWOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRXhFYVVNSG8ybzQ4dXlCWXp4TVFkcEpOaDdIQktwbEFiMkxjdlhKQVZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0Um4zSXkwOUhQNXZLT2U0LzdnUWI2ZUZvcXJyV2YzU3c0bWFLVzE1RWljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIcXF0ZmNmRFdFRDlBKzVTcm8xQWsrMEtINDlCVHkySjMxdHJnN0NxMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVOQzRaenFLWm44WFl1QldRd3dQM0NqQWlSVm5ERXpGSHFhazQ0YWlreEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lJc1YxVW9mbC8wS285L2w0OHZZdU12NEF4dHRyYzhSYlY1czYxUTZsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGI0dXl0VmU0djdFTmNOamFJVzhtSWNSa1IxS3dXT291WUNuZysydTVFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilg5THpGUmJ1eG4vTjhrK2tuNUQ5OGtteDJIcW9iY0lOeUNROXA1UjgyZVE2K21mWkQwaUZTVTdWaXlHcWZId00rMmw2bDBzQ1dkQkpTYSs3eldYbGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiI1UEUrN2lnQTJMRk5FR0ViWGFPbXljdWVlNTJMdkxyelErU3pvYjhzTmlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2ODc0MDI0MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRjQ0NDNEMDg0MThGMkNFMDQyRjY5MkMwRDU1RjI0QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2NDA5Njg5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUcmlFX3djblMyR1c0aW1Cd0tjcWhRIiwicGhvbmVJZCI6IjEwNmM1NTFkLTYyMTQtNDUyYy1hZGI4LTYzN2UwYzE3ODk2ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrcjhRMzJjNVRFZXR1V0UwV0tzb3RHdGZuSnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NCOXY1OENFa291N2xmR2dGZUpQZlF1U1lNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iks3UTdIVFdaIiwibWUiOnsiaWQiOiIyNTQ3Njg3NDAyNDE6ODVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l6dDYxb1F4WVQrdXdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRGL3pTQ3RRQmRkZGNjbXZuS2NkbWlmdk5iakpCbm5pdWJxY2d2cU41UzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFhMndiZlp1R3RjWkRjUGV0N0NVb0N1MnNSMDM1QzBSUTNlejhEdU1QOHVCNmVXM1M0RHppWlpkdkpyeTVuUGREZG5SbFNneTVCSWJiNURubjM0L0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBdThDTWU2NVlpa0dvOW9BeUdQNVU2VDI2YklhdWpDby96TnpZaVlaV2xYcmh1WnRsd1J2Z3ZhaWtyNXUyeGphNzBIM284UHFWemdEekZ1aElLdnlnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2ODc0MDI0MTo4NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiUmY4MGdyVUFYWFhYSEpyNXluSFpvbjd6VzR5UVo1NHJtNm5JTDZqZVV0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NDA5NjgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUl4QSJ9",
    CAPTION: process.env.CAPTION || "code by braveen ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HI PAL IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "Braveen",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
