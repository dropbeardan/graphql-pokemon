import fs from 'fs';
import path from 'path';

import trainers from './trainers.json';

class Trainers {
	constructor(trainers) {
		this._trainers = trainers;
		this._pathToFile = path.join(__dirname, 'trainers.json');
	}

	get state() {
		return this._trainers;
	}

	update(newState) {
		this._trainers = [...newState];

		fs.writeFile(this._pathToFile, JSON.stringify(newState), err => {
			if (err) {
				console.log(err);
			}
		});
	}
}

export default new Trainers(trainers);
