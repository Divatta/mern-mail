const sendMail = require("../middleware/Mail")

const mailController = {
    sendMail: async (req,res) => {
        try {
            const { to, subject, content } = req.body

            const result = await sendMail(to,subject,content)
            
            res.json({ msg: "Mail sent successfully" , result: result })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    recoveryPassword: async (req,res) => {
        try {
            const { to, subject, content } = req.body

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = mailController