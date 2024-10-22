import Combat from '../models/combatModel.js';

export const store = async (req, res) => {
    try{
        const combat = await Combat.create(req.body);
        return res.status(200).json(combat);
    } catch {
    return res.status(400).json({ error: 'Combat creation failed'});
    }
};
