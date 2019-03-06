/**
  * Copyright (c) Microsoft Corporation
  *  All Rights Reserved
  *  MIT License
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy of this
  * software and associated documentation files (the "Software"), to deal in the Software
  * without restriction, including without limitation the rights to use, copy, modify,
  * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  * permit persons to whom the Software is furnished to do so, subject to the following
  * conditions:
  *
  * The above copyright notice and this permission notice shall be
  * included in all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
  * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
  * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

import { AuthError } from "./AuthError";
import { stat } from 'fs-extra';

export const ServerErrorMessage = {
    serverUnavailable: {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    },
    unknownServerError: {
        code: "unknown_server_error"
    },
};

/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
export class ServerError extends AuthError {

    constructor(errorCode: string, errorMessage?: string, state?: string) {
        super(errorCode, errorMessage, state);
        this.name = "ServerError";

        Object.setPrototypeOf(this, ServerError.prototype);
    }

    static createServerUnavailableError(): ServerError {
        return new ServerError(ServerErrorMessage.serverUnavailable.code,
            ServerErrorMessage.serverUnavailable.desc);
    }

    static createUnknownServerError(errorDesc: string): ServerError {
        return new ServerError(ServerErrorMessage.unknownServerError.code,
            errorDesc);
    }
}
