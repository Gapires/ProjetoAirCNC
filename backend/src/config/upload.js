const multer = require('multer');
const path = require('path');

// Multer = consegue trabalhar com metadados de tipo arquivos (mongoose não);
// _Dirname = uma variavel global que indica onde o arquivo atual se encontra
// path.resolve = caminho relativo para a pasta uploads (windows não entende "../")

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`);
        }
    })
}