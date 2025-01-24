const { newsModel } = require("../models/newsModel");

// Hamma yangiliklarni olish
exports.getAllNews = async (req, res) => {
    try {
        const news = await newsModel.find()

        if (!news.length) {
            return res.status(404).send({
                error: "Yangiliklar mavjud emas!"
            })
        }

        return res.status(200).send({
            message: "Yangiliklar jadvali!",
            news
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

// Bitta yangilini ko'rish
exports.getOneNews = async (req, res) => {
    try {
        const { params: { id } } = req

        // Checking id to valid.
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({
                error: "ID haqiqiy emas!"
            })
        }

        const news = await newsModel.findById(id)

        if (!news) {
            return res.status(404).send({
                error: "Yangilik topilmadi!"
            })
        }

        return res.status(200).send({
            message: "Yangilik!",
            news
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