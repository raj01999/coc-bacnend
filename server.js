/**
 * ******* all import statements *******
 */
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { playerByTag, clanByTag, clanWarlogByTag, clanMembersByTag, clanCurrentWarByTag, clanLeague, clanLeagueWars, locations, leagues, clans } from "./functions.js";

/**
 * ******* env config and express config *******
 */
dotenv.config();
const app = express();

/**
 * ******* all middlewares *******
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * ******* playerByTag *******
 */
app.get("/playerByTag", async (req, res) => {
    const tag = req.query.tag;
    if (!tag) {
        return res.status(400).json({
            "status": "error",
            "message": "please provide an valid tag name",
        })
    }
    const [status, resp] = await playerByTag(tag);

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* clanByTag *******
 */
app.get("/clanByTag", async (req, res) => {
    const tag = req.query.tag;
    if (!tag) {
        return res.status(400).json({
            "status": "error",
            "message": "please provide an valid tag name",
        })
    }
    const [status, resp] = await clanByTag(tag);

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* clanMembersByTag *******
 */
app.get("/clanMembersByTag", async (req, res) => {
    const tag = req.query.tag;
    if (!tag) {
        return res.status(400).json({
            "status": "error",
            "message": "please provide an valid tag name",
        })
    }
    const [status, resp] = await clanMembersByTag(tag);

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* clanWarlogByTag *******
 */
app.get("/clanWarlogByTag", async (req, res) => {
    const tag = req.query.tag;
    if (!tag) {
        return res.status(400).json({
            "status": "error",
            "message": "please provide an valid tag name",
        })
    }
    const [status, resp] = await clanWarlogByTag(tag);

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* clanCurrentWarByTag *******
 */
app.get("/clanCurrentWarByTag", async (req, res) => {
    const tag = req.query.tag;
    if (!tag) {
        return res.status(400).json({
            "status": "error",
            "message": "please provide an valid tag name",
        })
    }
    const [status, resp] = await clanCurrentWarByTag(tag);

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* clanLeague *******
 */
app.get("/clanLeague", async (req, res) => {
    const tag = req.query.tag;
    if (!tag) {
        return res.status(400).json({
            "status": "error",
            "message": "please provide an valid tag name",
        })
    }
    const [status, resp] = await clanLeague(tag);

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* clanLeagueWars *******
 */
app.get("/clanLeagueWars", async (req, res) => {
    const tag = req.query.tag;
    if (!tag) {
        return res.status(400).json({
            "status": "error",
            "message": "please provide an valid tag name",
        })
    }
    const [status, resp] = await clanLeagueWars(tag);

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* locations *******
 */
app.get("/locations", async (req, res) => {
    const [status, resp] = await locations();

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* leagues *******
 */
app.get("/leagues", async (req, res) => {
    const [status, resp] = await leagues();

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* clans *******
 */
app.get("/clans", async (req, res) => {
    const warFrequency = req.query.warFrequency;
    const clanMemberNumber = Number(req.query.clanMemberNumber);

    const [status, resp] = await clans(warFrequency, clanMemberNumber);

    if (status == 200) {
        res.status(200).json({
            "status": "success",
            "data": resp,
        })
    } else {
        res.status(400).json({
            "status": "error",
            "message": resp.message,
        })
    }
})

/**
 * ******* server listening to port *******
 */
app.listen(process.env.PORT || 8000, (err) => {
    console.log("Server is running");
});