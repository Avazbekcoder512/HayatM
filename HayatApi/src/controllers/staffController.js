const { staffModel } = require("../models/staffModel");

// Barcha xodimlarni ko'rish
exports.getAllStaff = async (req, res) => {
    try {
        const staff = await staffModel.find()

        if (!staff.length) {
            return res.status(404).send({
                error: "Xodimlar mavjud emas!"
            })
        }

        return res.status(200).send({
            message: "Xodimlar jadvali!",
            staff
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

// Bitta xodimni olish
exports.getOneStaff = async (req, res) => {
    try {
        const { params: { id } } = req

        // Checking id to valid.
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({
                error: "ID haqiqiy emas!"
            })
        }

        const staff = await staffModel.findById(id)

        if (!staff) {
            return res.status(404).send({
                error: "Xodim topilmadi!"
            })
        }

        return res.status(200).send({
            message: "Xodim!",
            staff
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