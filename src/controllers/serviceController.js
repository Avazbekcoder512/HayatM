const { serviceModel } = require("../models/serviceModel");

// Barcha xizmatlarni ko'rish
exports.getAllServices = async (req, res) => {
    try {
        const services = await serviceModel.find()

        if (!services.length) {
            return res.status(404).send({
                error: "Xizmatlar mavjud emas!"
            })
        }

        return res.status(200).send({
            message: "Xizmatlar jadvali!",
            services
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

// Bitta xizmatni ko'rish
exports.getOneService = async (req, res) => {
    try {
        const { params: { id } } = req

        // Checking id to valid.
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({
                error: "ID haqiqiy emas!"
            })
        }

        const service = await serviceModel.findById(id)

        if (!service) {
            return res.status(404).send({
                error: "Xizmat topilmadi!"
            })
        }

        return res.status(200).send({
            message: "Xizmat!",
            service
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