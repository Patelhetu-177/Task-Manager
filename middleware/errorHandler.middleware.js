
const errorHandler = (err, res, req, next) => {

    return res
        .status(500)
        .json({ msg: `Something went wrong , please try later` })
}

module.exports = errorHandler