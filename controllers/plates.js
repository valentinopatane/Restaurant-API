import PlatesService from "../service/plates/factory.js";
export async function createPlate(req, res) {
    try {
        const data = await PlatesService.createPlate(req.params.id, req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export async function editPlate(req, res) {
    try {
        const data = await PlatesService.editPlate(
            req.params.id,
            req.body.plateId,
            req.body
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export async function deletePlate(req, res) {
    try {
        const data = await PlatesService.delPlate(
            req.params.id,
            req.body.plateId
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
