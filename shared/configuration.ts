export interface EventConfiguration{
    id: number;
    event: any
}

export interface ChangeLanguageInterface extends EventConfiguration{
    event: (lang: string) => void
}

const configuration: {
    configuration: any,
    events: {
        changeLanguage: ChangeLanguageInterface[]
    };
} = {
    configuration: {
        lang: 'it'
    },
    events: {
        changeLanguage: []
    }
}
export default configuration
