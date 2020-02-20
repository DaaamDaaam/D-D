export const listeTheme = [
    {
        id : 1,
        titre:'Histoire de France'
    },
    {
        id : 2,
        titre:'Pokémon'
    }
]

export const listeQuiz = [
    {
        id : 1,
        titre: 'Quiz 1',
        idTheme: 1
    },
    {
        id : 2,
        titre: 'Quiz 2',
        idTheme: 2
    }
]

export function getTheme(id) {
    return listeTheme.find(item => item.id === id);
  }
  
export function getQuiz(id) {
    return listeQuiz.find(item => item.id === id);
  }

export function getListeQuiz(idTheme) {
    return listeQuiz.filter(item => item.idTheme === idTheme);
}