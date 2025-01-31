const { doctorModel } = require("../models/doctorModel");

// Hamma doctorlarni ko'rish
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find();

        if (!doctors) {
            return res.status(404).send({
                error: "Shifokorlar topilmadi!",
            });
        }

        return res.status(200).send({
            message: "Shifokorlar ro'yxati!",
            doctors,
        });
    } catch (error) {
        console.log(error);
        if (error.message) {
            return res.status(400).send({
                error: error.message,
            });
        }
        return res.status(500).send("Serverda xatolik!");
    }
};

// Bitta doctorni ko'rish
exports.getOneDoctors = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;

        // Checking id to valid.
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({
                error: "ID haqiqiy emas!",
            });
        }

        const doctor = await doctorModel.findById(id);

        if (!doctor) {
            return res.status(404).send({
                error: "Shifikor topilmadi!",
            });
        } else {
            return res.status(200).send({
                message: "Shifokor",
                doctor,
            });
        }
    } catch (error) {
        console.log(error);
        if (error.message) {
            return res.status(400).send({
                error: error.message,
            });
        }
        return res.status(500).send("Serverda xatolik!");
    }
};