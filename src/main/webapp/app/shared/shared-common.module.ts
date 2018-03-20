import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    OnlinecheckSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        OnlinecheckSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        OnlinecheckSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class OnlinecheckSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
