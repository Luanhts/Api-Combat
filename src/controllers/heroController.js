import Hero from '../models/heroModel.js';

export const store = async (req, res) => {
    try{
        const hero = await Hero.create(req.body);
        return res.status(200).json(hero);
    } catch {
    return res.status(400).json({ error: 'Hero creation failed'});
    }
};

export const index = async (req, res) => {
    try {
        const heros = await Hero.find().exec();
        return res.status(200).json(heros);
    } catch (error) {
        return res.status(400).json({ error: 'Hero search failed' });
    }
}

export const show = async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id).exec()
         // falta mostrar o mosntro derrotado 
        return res.status(200).json(hero) 
    } catch (error) {
        res.status(400).json(error)
    }
}
export const update = async (req, res) => {
    try {
        const hero = await Hero.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(hero);
    } catch (error) {
        return res.status(400).json({ error: 'Hero update failed' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Hero.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Hero deletion failed' });
    }
};