import {IDisabled } from './IDisabled'
import React from 'react';
export interface ITextField extends IDisabled{
    disabled?:boolean;
    onChange?:(
        e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >

    ) => void;
}