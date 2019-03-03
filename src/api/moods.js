const Mood = require('../models').Mood;

module.exports = {
    list(req, res) {
        return Mood
            .findAll({
                order: [
                    ['id', 'DESC'],
                ],
            })
            .then((moods) => res.status(200).send(moods))
            .catch((error) => { res.status(400).send(error); });
    },

    listLimit(req, res) {
        return Mood
            .findAll({
                limit: 8,
                order: [
                    ['id', 'DESC'],
                ],
            })
            .then((moods) => res.status(200).send(moods))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return Mood
            .findById(req.params.id, {})
            .then((Mood) => {
                if (!Mood) {
                    return res.status(404).send({
                        message: 'Mood Not Found',
                    });
                }
                return res.status(200).send(Mood);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Mood
            .create({
                author: req.body.author,
                mood: req.body.mood,
            })
            .then((Mood) => res.status(201).send(Mood))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Mood
            .findById(req.params.id, {})
            .then(Mood => {
                if (!Mood) {
                    return res.status(404).send({
                        message: 'Mood Not Found',
                    });
                }
                return Mood
                    .update({
                        author: req.body.author || Mood.author,
                        mood: req.body.mood || Mood.mood,
                    })
                    .then(() => res.status(200).send(Mood))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return Mood
            .findById(req.params.id)
            .then(Mood => {
                if (!Mood) {
                    return res.status(400).send({
                        message: 'Mood Not Found',
                    });
                }
                return Mood
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};