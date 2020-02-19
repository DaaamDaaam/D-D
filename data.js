export const liste_theme = [
    {
        id : 1,
        titre:'Thème 1'
    }
]

export const liste_quiz = [
    {
        id : 1,
        titre: 'Quiz 1',
        id_theme: 1
    }
]

export function getTheme(id) {
    return listeTheme.find(item => item.id === id);
  }
  
export function getQuiz(id) {
    return listeQuiz.find(item => item.id === id);
  }