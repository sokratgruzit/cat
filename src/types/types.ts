export interface AppState {
    activeLanguage: LanguageProp;
    loading: boolean;
    openBurger: boolean;
    openLangs: boolean;
}

export interface LanguageProp {
    id: number;
    name: string;
    flag: string;
    lang: string;
    langFull: string;
}

export type LanguagesProps = LanguageProp[];

export interface Cat {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: any[]; 
}

export type Cats = Cat[];

export interface CardProps {
    src: string;
    title: string;
    text: string;
}

export type Cards = CardProps[];