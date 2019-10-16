/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import {IDictionary} from '../../../types';
import {trim} from '../string';
import {KEY_ALIASES} from '../../../constants';

/**
 * Normalize keys to some standart name
 *
 * @param keys
 */
export const normalizeKeyAliases = (keys: string): string => {
	const memory: IDictionary<boolean> = {};

	return keys
		.replace(/\+\+/g, '+add')
		.split(/[\s]*\+[\s]*/)
		.map(key => trim(key.toLowerCase()))
		.map(key => KEY_ALIASES[key] || key)
		.sort()
		.filter(key => !memory[key] && key !== '' && (memory[key] = true))
		.join('+');
};
