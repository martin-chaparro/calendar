const { Router } = require("express");

const authRoutes = require("./auth");
const eventsRoutes = require("./events");

const router = new Router();

router.use("/auth", authRoutes);
router.use("/events", eventsRoutes);

module.exports = router;
