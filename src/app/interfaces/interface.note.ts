const NOTES_KEY = 'notes';

export interface Note{
    note:Array<Noteitem>;
}

export interface Noteitem{
  title:string;
  body:string;
}