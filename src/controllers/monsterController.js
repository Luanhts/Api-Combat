import Monster from '../models/monsterModel.js';

export const store = async (req, res) => {
    try{
        const monster = await Monster.create(req.body);
        return res.status(200).json(monster);
    } catch {
    return res.status(400).json({ error: 'Monster creation failed'});
    }
};

export const index = async (req, res) => {
    try {
        const monsters = await Monster.find().exec();
        return res.status(200).json(monsters);
    } catch (error) {
        return res.status(400).json({ error: 'monsters search failed'});
    }
}

export const show = async (req, res) => {
    try {
        const monster = await Monster.findById(req.params.id).exec()
        res.json(monster)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const update = async (req, res) => {
    try {
        const monster = await Monster.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(monster);
    } catch (error) {
        return res.status(400).json({ error: 'Monster update failed' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Monster.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Monster deletion failed' });
    }
};