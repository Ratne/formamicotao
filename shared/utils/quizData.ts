export const quizData =    [
        {
            question: 'É Maschio o Femmina?',
            name: 'gender',
            label: 'Sesso',
            answers: [
                {label: 'Maschio', tag:'11', image: 'cane_maschio.png', value: 0},
                {label: 'Femmina', tag:'12', image:'cane_femmina.png' , value: 1},]
        },
        {
            question: 'Che taglia è?',
            name: 'size',
            label: 'Taglia',
        answers: [
            {label: 'Piccola', tag:'13', image: 'cane_piccolo.png', value: 0},
            {label: 'Media', tag:'14', image: 'cane_medio.png', value: 1},
            {label: 'Grande', tag:'15', image: 'cane_grande.png', value: 2},
            ]
        },
    {
        question: 'Quanti anni ha?',
        name: 'year',
        label: 'Età',
        answers: [

            {label: '0-5 Mesi', tag:'1', image: 'cane_cucciolo.png', value: 0},
            {label: '6-10 Mesi', tag:'2', image: 'cane_etamedio.png', value: 1},
            {label: '11 Mesi - 7 Anni', tag:'3', image: 'cane_etaadulto.png', value: 2},
            {label: 'Oltre 7 Anni', tag:'4', image: 'cane_etaanziano.png', value: 3},
        ]
    },
    {
        question: 'Segni Particolari?',
        name: 'sign',
        label: 'Segni Particolari',
        answers: [
            {label: 'Coccolone', tag:'5', image: 'canecalmo.png', value: 0},
            {label: 'Monello', tag:'6', image: 'caneagitato.png', value: 1},
            {label: 'Birichino', tag:'7', image: 'caneaggressivo.png', value: 2},
            {label: 'Fifone', tag:'8', image: 'canepauroso.png', value: 3},
        ]
    },
    {
        question: 'Come vi siete conosciuti?',
        name: 'appointment',
        answers: [
            {label: 'Lo abbiamo adottato', tag:'9', image: 'caneadottato.png', value: 0},
            {label: 'Proviene da un allevamento', tag:'10', image: 'caneallevamento.png', value: 1}
        ]
    },

    ]
