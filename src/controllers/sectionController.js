const { sectionModel } = require("../models/sectionModel");
const { analysisModel } = require("../models/analysisModel")

// Hamma bo'limlarni ko'rish
exports.getSection = async (req, res) => {
    try {
        const section = await sectionModel.find().populate("analysis")

        if (!section) {
            return res.status(404).send({
                error: "Bo'lim topilmadi!"
            })
        }

        return res.status(200).send({
            message: "Bo'limlar ro'yhati!",
            section
        })
    } catch (error) {
        console.log(error);
        if (error.message) {
            return res.status(400).send({
                error: error.message,
            });
        }
        return res.status(500).send("Serverda xatolik!");
    }
}

// Bitta bo'limni olish
exports.getOneSection = async (req, res) => {
    try {
        const { params: { id } } = req

        // ID ni tekshirish
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({
                error: "ID haqiqiy emas!",
            });
        }

        const section = await sectionModel.findById(id).populate('analysis')

        if (!section) {
            return res.status(404).send({
                error: "Bo'lim topilmadi!"
            })
        }

        return res.status(200).send({
            section
        })
    } catch (error) {
        console.log(error);
        if (error.message) {
            return res.status(400).send({
                error: error.message,
            });
        }
        return res.status(500).send("Serverda xatolik!");
    }
}