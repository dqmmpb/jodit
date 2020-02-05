/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import {SnapshotType} from '../../types';
import {Observer} from './observer';

export class Command {
	readonly oldValue: SnapshotType;
	readonly newValue: SnapshotType;
	private observer: Observer;

	constructor(
		oldValue: SnapshotType,
		newValue: SnapshotType,
		observer: Observer
	) {
		this.observer = observer;
		this.oldValue = oldValue;
		this.newValue = newValue;
	}

	public undo() {
		this.observer.snapshot.restore(this.oldValue);
	}

	public redo() {
		this.observer.snapshot.restore(this.newValue);
	}
}
