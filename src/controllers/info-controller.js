const info = (req, res) => {
  return res.json({
    success: true,
    message: "Api is working fine",
    error: {},
    data: {},
  });
};
module.exports = { info };
