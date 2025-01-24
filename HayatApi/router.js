const { getAllDoctors, getOneDoctors } = require('./src/controllers/doctorController')
const { getAllNews, getOneNews } = require('./src/controllers/newsController')
const { getResult, downloadResult } = require('./src/controllers/resultController')
const { getSection, getOneSection } = require('./src/controllers/sectionController')
const { getAllServices, getOneService } = require('./src/controllers/serviceController')
const { getAllStaff, getOneStaff } = require('./src/controllers/staffController')
const { limiter } = require('./src/middleware/limiter')

const router = require('express').Router()

router
// Doctor Router
.get('/doctors', getAllDoctors)
.get('/doctor/:id', getOneDoctors)

// Section Router
.get('/sections', getSection)
.get('/section/:id', getOneSection)

// News Router
.get('/news', getAllNews)
.get('/news/:id', getOneNews)

// Service Router
.get('/services', getAllServices)
.get('/service/:id', getOneService)

// Staff Router
.get('/staff', getAllStaff)
.get('/staff/:id', getOneStaff)

// Result Router
.get('/result', limiter, getResult)
.get('/download-result', limiter, downloadResult)

module.exports = router