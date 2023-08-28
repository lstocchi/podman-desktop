/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/
import type { CommandExecutor, Event } from '@podman-desktop/api';
import { Emitter } from '../events/emitter.js';
import type { IDisposable } from '../types/disposable.js';
import { CommandRegistry } from '../command-registry.js';

export class CommandExecutorImpl implements CommandExecutor, IDisposable {
  private readonly _onDidConfirmSelection = new Emitter<number[]>();
  private readonly _onDidHide = new Emitter<void>();

  private readonly _onDidStart = new Emitter<void>();
  private readonly _onDidEnd = new Emitter<void>();

  private readonly _args: unknown[];

  constructor(private readonly commandRegistry: CommandRegistry, private readonly command: string, ...args: unknown[]) { 
    this._args = args;
  }
  
  async execute<T = unknown>(): Promise<T> {
    try {
      this._onDidStart.fire();
      return await this.commandRegistry.executeCommand(this.command, this._args);
    } finally {
      this._onDidEnd.fire();
    }    
  }

  readonly onDidStart: Event<void> = this._onDidStart.event;
  readonly onDidEnd: Event<void> = this._onDidEnd.event;

  dispose(): void {
    this._onDidConfirmSelection.dispose();
    this._onDidHide.dispose();
  }
}
