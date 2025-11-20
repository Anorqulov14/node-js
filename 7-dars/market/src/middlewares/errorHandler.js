export function errorHandler(err, req, res, next) {
    console.error("Xatolik:", err.message);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Server xatosi"
    });
}
