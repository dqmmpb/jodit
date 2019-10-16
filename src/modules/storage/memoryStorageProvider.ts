/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import {IDictionary, IStorage} from '../../types';

export class MemoryStorageProvider implements IStorage {
	data: IDictionary<string> = {};

	public set(key: string, value: string | number) {
		this.data[key] = value.toString();
	}

	public get(key: string): string | null {
		return this.data[key] || null;
	}
}
