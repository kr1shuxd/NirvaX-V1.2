require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",
    clientID: process.env.CLIENT_ID || "1297474705867145287", 
    prefix: process.env.PREFIX || "+", 
    ownerID: process.env.OWNER_ID || "1282344443109838903",
    SpotifyID: process.env.SPOTIFY_ID || "e6f84fbec2b44a77bf35a20c5ffa54b8",
    SpotifySecret: process.env.SPOTIFY_SECRET || "498f461b962443cfaf9539c610e2ea81",
    mongourl: process.env.MONGO_URL || "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER || "youtube, youtube music, soundcloud",
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/1350476570615087216/1351243557159047280/Picsart_25-03-17_20-42-49-146.jpg?ex=67d9ab20&is=67d859a0&hm=2a1032624840148cf9a51a4e46ef57e7d4390f42c1dabe97742c420860063d00&=&format=webp&width=1162&height=465', 
        support: process.env.SUPPORT || 'https://dsc.gg/nirvax',
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1297474705867145287&permissions=40271764311104&integration_type=0&scope=bot' 
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "new-york-node-1.vortexcloud.xyz",
            port: parseInt(process.env.NODE_PORT || "9465"),
            password: process.env.NODE_PASSWORD || "youshallnotpass",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
        }
    ],
};

function parseBoolean(value) {
    if (typeof value === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
