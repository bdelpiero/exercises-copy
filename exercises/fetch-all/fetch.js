"use strict";

/**
 * Fetches a single resource by url. Nothing fancy. It returns an object similar to this
 * ```
 * {
 *    data: <the response body>,
 *    status: <an HTTP status code>
 * }
 * ```
 */
module.exports = url => axios.get(url)