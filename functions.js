/**
 * ******* all import statements *******
 */
import dotenv from "dotenv";
import clashApi from "clash-of-clans-api";

/**
 * ******* env config *******
 */
dotenv.config();

/**
 * ******* clash of clan api configure *******
 */
const yourApiToken = process.env.COC_API_TOKEN;

let client = clashApi({
    token: yourApiToken,
});

/**
 * ******* functions *******
 */

/**
 * @param {String} tag
 * @returns {[Number,Object]}
 */
async function playerByTag(tag) {
    let queryTag;
    if (tag.includes("#")) {
        queryTag = tag;
    } else {
        queryTag = "#" + tag;
    }
    try {
        const resp = await client.playerByTag(queryTag);
        return [200, resp];
    } catch (err) {
        return [400, err];
    }
}

/**
 * @param {String} tag 
 * @returns {[Number, Object]}
 */
async function clanByTag(tag) {
    let queryTag;
    if (tag.includes("#")) {
        queryTag = tag;
    } else {
        queryTag = "#" + tag;
    }
    try {
        const resp = await client.clanByTag(queryTag);
        return [200, resp];
    } catch (err) {
        return [400, err];
    }
}

/**
 * @param {String} tag 
 * @returns {[Number, Object]}
 */
async function clanMembersByTag(tag) {
    let queryTag;
    if (tag.includes("#")) {
        queryTag = tag;
    } else {
        queryTag = "#" + tag;
    }
    try {
        const resp = await client.clanMembersByTag(queryTag);
        return [200, resp];
    } catch (err) {
        return [400, err];
    }
}

/**
 * @param {String} tag 
 * @returns {[Number, Object]}
 */
async function clanWarlogByTag(tag) {
    let queryTag;
    if (tag.includes("#")) {
        queryTag = tag;
    } else {
        queryTag = "#" + tag;
    }
    try {
        const resp = await client.clanWarlogByTag(queryTag);
        return [200, resp];
    } catch (err) {
        return [400, err];
    }
}

/**
 * @param {String} tag 
 * @returns {[Number, Object]}
 */
async function clanCurrentWarByTag(tag) {
    let queryTag;
    if (tag.includes("#")) {
        queryTag = tag;
    } else {
        queryTag = "#" + tag;
    }
    try {
        const resp = await client.clanCurrentWarByTag(queryTag);
        return [200, resp];
    } catch (err) {
        return [400, err];
    }
}

/**
 * @param {String} tag 
 * @returns {[Number, Object]}
 */
async function clanLeague(tag) {
    let queryTag;
    if (tag.includes("#")) {
        queryTag = tag;
    } else {
        queryTag = "#" + tag;
    }
    try {
        const resp = await client.clanLeague(queryTag);
        return [200, resp];
    } catch (err) {
        return [400, err];
    }
}

/**
 * @param {String} tag 
 * @returns {[Number, Object]}
 */
async function clanLeagueWars(tag) {
    let queryTag;
    if (tag.includes("#")) {
        queryTag = tag;
    } else {
        queryTag = "#" + tag;
    }
    try {
        const resp = await client.clanLeagueWars(queryTag);
        return [200, resp];
    } catch (err) {
        return [400, err];
    }
}

/**
 * @param {None} None
 * @returns {None}
 */
async function locations() {
    try {
        const resp = await client.locations().fetch();
        return [200, resp];
    } catch (err) {
        return [400, err];
    }
}

/**
 * @param {None} None
 * @returns {None}
 */
async function leagues() {
    try {
        const resp = await client.leagues();
        return [200, resp];
    } catch (err) {
        return [400, err];
    }
}

/**
 * @param {String} warFrequency 
 * @param {Number} clanMemberNumber 
 * @returns {[Number, Object]}
 */
async function clans(warFrequency, clanMemberNumber) {
    if (clanMemberNumber && warFrequency) {
        try {
            const resp = await client.clans().withWarFrequency(warFrequency).withMinMembers(clanMemberNumber).fetch();
            return [200, resp];
        } catch (err) {
            return [400, err];
        }
    } else if (clanMemberNumber) {
        try {
            const resp = await client.clans().withMinMembers(clanMemberNumber).fetch();
            return [200, resp];
        } catch (err) {
            return [400, err];
        }
    } else if (warFrequency) {
        try {
            const resp = await client.clans().withWarFrequency(warFrequency).fetch();
            return [200, resp];
        } catch (err) {
            return [400, err];
        }
    } else {
        return [400, new Error('please prove valid warFrequency & clanMemberNumber')]
    }
}

/**
 * ******* all exports *******
 */
export { playerByTag, clanByTag, clanWarlogByTag, clanMembersByTag, clanCurrentWarByTag, clanLeague, clanLeagueWars, locations, leagues, clans }
