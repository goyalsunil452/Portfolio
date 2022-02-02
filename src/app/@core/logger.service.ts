import { Injectable, enableProdMode } from '@angular/core';
// import {LogLevel} from './log-level.enum';
import { environment } from '../../environments/environment';

/**
 * @description Logger service for environment logging.
 */

export enum LogLevel {
    Off = 0,
    Error,
    Warrning,
    Info,
    Debug
}

export type LogOutput = (source: string | undefined, level: LogLevel, ...objects: any[]) => void;


export class Logger {
    static level: LogLevel = LogLevel.Debug;
    static outputs: LogOutput[] = [];

    static enableProductionMode() {
        Logger.level = LogLevel.Warrning;
    }
    constructor(private source: string) { }

    debug(...objects: any[]): void {
        this.log(console.log,LogLevel.Debug, objects);
    }

    info(...objects: any[]) {
        this.log(console.info,LogLevel.Info, objects);
    }

    warn(...objects: any[]) {
        this.log(console.warn,LogLevel.Warrning, objects);
    }

    error(...objects: any[]) {
        this.log(console.error,LogLevel.Error, objects);
    }

    /**
     * Should write the log?
     */
    log(func: (...arg: any[]) => void, level: LogLevel, objects: any[]) {
        if (level <= Logger.level) {
            const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs?.forEach((output) => output.apply(output, [this.source, level, ...objects]))
        }
    }

    /**
     * Write logs.
     */
    //   private static Log(level: LogLevel, ...objects: any) {
    //     if (this.shouldLog(level)) {
    //       if (level <= LogLevel.INFO) {
    //         console.log(Logger.getLogDate(), ...objects);
    //       } else if (level === LogLevel.ERROR) {
    //         console.error(Logger.getLogDate(), ...objects);
    //       } else if (level === LogLevel.WARN) {
    //         console.warn(Logger.getLogDate(), ...objects);
    //       }
    //     }
    //   }

    /**
     * To add the date on logs.
     */
    private static getLogDate(): string {
        const date = new Date();
        return '[' +
            date.getUTCFullYear() + '/' +
            (date.getUTCMonth() + 1) + '/' +
            date.getUTCDate() + ' ' +
            date.getUTCHours() + ':' +
            date.getUTCMinutes() + ':' +
            date.getUTCSeconds() + '.' +
            date.getMilliseconds() + ']';
    }
}
