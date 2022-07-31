/*CLIENTS*/

export default function hadler(req, res) {
    res.status(200).json([
        { id: 1, name: "Caiozin", token: "tkn123", ip: "1234" }
    ])
}